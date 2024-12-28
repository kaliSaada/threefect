import React from 'react';
import { MagicParticles } from 'threeffect';

function App() {
    return (
        <MagicParticles
            imageUrl="https://picsum.photos/id/237/400/300"
            particleSize={4}
            particleArea={60000}
            particleAmount={80000}
            ease={0.3}
            cameraConfig={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 400] }}
            backgroundColor={0x000000}
            style={{ width: '100%', height: '600px' }}
        />
    );
}

export default App;