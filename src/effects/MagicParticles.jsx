import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

// Shaders
const vertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(color * vColor, 1.0);
    gl_FragColor *= texture2D(pointTexture, gl_PointCoord);
  }
`;

function MagicParticles({
                            imageUrl = '',
                            particleTextureUrl = 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png',
                            particleSize = 5,
                            particleArea = 50000,
                            particleAmount = 100000,
                            ease = 0.5,
                            cameraConfig = { fov: 65, near: 1, far: 10000, position: [0, 0, 800] },
                            backgroundColor = 0x222222,
                            style = {},
                        }) {
    const containerRef = useRef(null);
    const environmentRef = useRef(null);

    const setupEnvironment = useCallback(() => {
        if (environmentRef.current) return;

        const manager = new THREE.LoadingManager();
        let particleTexture = null;

        manager.onLoad = () => {
            if (!environmentRef.current) {
                environmentRef.current = new Environment(particleTexture);
            }
        };

        particleTexture = new THREE.TextureLoader(manager).load(particleTextureUrl);
    }, [particleTextureUrl]);

    useEffect(() => {
        setupEnvironment();

        return () => {
            if (environmentRef.current) {
                environmentRef.current.dispose();
                environmentRef.current = null;
            }
        };
    }, [setupEnvironment]);

    class Environment {
        constructor(particle) {
            this.particle = particle;
            this.container = containerRef.current;

            if (!this.container) {
                console.error("Container not available for Three.js environment.");
                return;
            }

            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(backgroundColor);

            this.createCamera();
            this.createRenderer();
            this.setup();
            this.bindEvents();
        }

        setup() {
            this.createParticles = new CreateParticles(
                this.scene,
                this.particle,
                this.camera,
                this.renderer
            );
        }

        bindEvents() {
            this.onWindowResize = this.onWindowResize.bind(this);
            window.addEventListener('resize', this.onWindowResize);
        }

        createCamera() {
            const { fov, near, far, position } = cameraConfig;
            this.camera = new THREE.PerspectiveCamera(
                fov,
                this.container.clientWidth / this.container.clientHeight,
                near,
                far
            );
            this.camera.position.set(...position);
        }

        createRenderer() {
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(
                this.container.clientWidth,
                this.container.clientHeight
            );
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            if (!this.container.contains(this.renderer.domElement)) {
                this.container.appendChild(this.renderer.domElement);
            }

            this.renderer.setAnimationLoop(() => {
                this.render();
            });
        }

        render() {
            if (this.createParticles) {
                this.createParticles.render();
            }
            this.renderer.render(this.scene, this.camera);
        }

        onWindowResize() {
            if (!this.container) return;
            this.camera.aspect =
                this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(
                this.container.clientWidth,
                this.container.clientHeight
            );
        }

        dispose() {
            window.removeEventListener('resize', this.onWindowResize);

            if (this.renderer) {
                this.renderer.dispose();
            }

            if (this.scene) {
                this.scene.traverse((object) => {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach((mat) => mat.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });
            }

            if (this.container && this.renderer.domElement) {
                this.container.removeChild(this.renderer.domElement);
            }
        }
    }

    class CreateParticles {
        constructor(scene, particleImg, camera, renderer) {
            this.scene = scene;
            this.particleImg = particleImg;
            this.camera = camera;
            this.renderer = renderer;

            this.raycaster = new THREE.Raycaster();
            this.mouse = new THREE.Vector2(-200, 200);
            this.currenPosition = new THREE.Vector3();

            this.isMouseDown = false;

            this.images = [imageUrl];

            this.data = {
                amount: particleAmount,
                particleSize: particleSize,
                area: particleArea,
                ease: ease,
            };

            this.currentImageIndex = 0;

            const geometry = new THREE.PlaneGeometry(
                this.visibleWidthAtZDepth(100, this.camera),
                this.visibleHeightAtZDepth(100, this.camera)
            );
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: 0,
            });
            this.planeArea = new THREE.Mesh(geometry, material);
            this.scene.add(this.planeArea);

            this.loadImageAndCreateParticles(this.images[this.currentImageIndex]);

            const canvas = this.renderer.domElement;
            canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
            canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
            canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        }

        loadImageAndCreateParticles(url) {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pointsGeometry = this.createGeometryFromImageData(imageData);

                if (this.particles) {
                    this.scene.remove(this.particles);
                    this.particles.geometry.dispose();
                    this.particles.material.dispose();
                }

                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        color: { value: new THREE.Color(0xffffff) },
                        pointTexture: { value: this.particleImg },
                    },
                    vertexShader,
                    fragmentShader,
                    blending: THREE.AdditiveBlending,
                    depthTest: false,
                    transparent: true,
                });

                this.particles = new THREE.Points(pointsGeometry, material);
                this.scene.add(this.particles);

                this.geometryCopy = new THREE.BufferGeometry();
                this.geometryCopy.copy(this.particles.geometry);
            };
        }

        createGeometryFromImageData(imageData) {
            const { width, height, data } = imageData;
            const thePoints = [];
            const colors = [];
            const sizes = [];

            let step = Math.floor(Math.sqrt((width * height) / this.data.amount));
            if (step < 1) step = 1;

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const idx = (y * width + x) * 4;
                    const r = data[idx];
                    const g = data[idx + 1];
                    const b = data[idx + 2];
                    const a = data[idx + 3];

                    if (a > 50) {
                        const posX = x - width / 2;
                        const posY = -(y - height / 2);
                        thePoints.push(new THREE.Vector3(posX, posY, 0));

                        colors.push(r / 255, g / 255, b / 255);
                        sizes.push(this.data.particleSize);
                    }
                }
            }

            const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
            geoParticles.setAttribute(
                'customColor',
                new THREE.Float32BufferAttribute(colors, 3)
            );
            geoParticles.setAttribute(
                'size',
                new THREE.Float32BufferAttribute(sizes, 1)
            );

            return geoParticles;
        }

        onMouseDown(event) {
            this.isMouseDown = true;
            this.data.ease = 0.01;
            this.updateMousePosition(event);
            this.updateCurrentPosition();
        }

        onMouseUp() {
            this.isMouseDown = false;
            this.data.ease = ease;
        }

        onMouseMove(event) {
            const rect = this.renderer.domElement.getBoundingClientRect();
            this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        }

        updateMousePosition(event) {
            const rect = this.renderer.domElement.getBoundingClientRect();
            this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        }

        updateCurrentPosition() {
            const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
            vector.unproject(this.camera);
            const dir = vector.sub(this.camera.position).normalize();
            const distance = -this.camera.position.z / dir.z;
            this.currenPosition.copy(
                this.camera.position.clone().add(dir.multiplyScalar(distance))
            );
        }

        render() {
            if (!this.particles || !this.geometryCopy) return;

            const pos = this.particles.geometry.attributes.position;
            const copy = this.geometryCopy.attributes.position;
            const sizes = this.particles.geometry.attributes.size;

            const posArray = pos.array;
            const copyArray = copy.array;
            const sizeArray = sizes.array;

            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersects = this.raycaster.intersectObject(this.planeArea);

            let mx = null;
            let my = null;
            if (intersects.length > 0) {
                mx = intersects[0].point.x;
                my = intersects[0].point.y;
            }

            for (let i = 0; i < pos.count; i++) {
                const i3 = i * 3;

                const initX = copyArray[i3];
                const initY = copyArray[i3 + 1];
                const initZ = copyArray[i3 + 2];

                let px = posArray[i3];
                let py = posArray[i3 + 1];
                let pz = posArray[i3 + 2];

                if (mx !== null && my !== null) {
                    const dx = mx - px;
                    const dy = my - py;
                    const distSq = dx * dx + dy * dy;

                    const f = -this.data.area / distSq;

                    if (this.isMouseDown) {
                        const t = Math.atan2(dy, dx);
                        px -= f * Math.cos(t);
                        py -= f * Math.sin(t);
                    } else {
                        const dist = Math.sqrt(distSq);
                        if (dist < this.data.area) {
                            const t = Math.atan2(dy, dx);
                            if (i % 5 === 0) {
                                px -= 0.03 * Math.cos(t);
                                py -= 0.03 * Math.sin(t);
                                sizeArray[i] = this.data.particleSize / 1.2;
                            } else {
                                px += f * Math.cos(t);
                                py += f * Math.sin(t);
                                sizeArray[i] = this.data.particleSize * 1.3;
                            }
                        }
                    }
                }

                px += (initX - px) * this.data.ease;
                py += (initY - py) * this.data.ease;
                pz += (initZ - pz) * this.data.ease;

                posArray[i3] = px;
                posArray[i3 + 1] = py;
                posArray[i3 + 2] = pz;
            }

            pos.needsUpdate = true;
            sizes.needsUpdate = true;
        }

        visibleHeightAtZDepth(depth, camera) {
            const cameraOffset = camera.position.z;
            if (depth < cameraOffset) depth -= cameraOffset;
            else depth += cameraOffset;
            const vFOV = (camera.fov * Math.PI) / 180;
            return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
        }

        visibleWidthAtZDepth(depth, camera) {
            const height = this.visibleHeightAtZDepth(depth, camera);
            return height * camera.aspect;
        }
    }

    return (
        <div
            ref={containerRef}
            style={{ width: '100%', height: '100%', ...style }}
        />
    );
}

export default MagicParticles;
