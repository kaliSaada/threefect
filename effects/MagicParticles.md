# MagicParticles

`MagicParticles` é um efeito de partículas interativas configuráveis que reagem ao movimento do mouse. É ideal para criar animações dinâmicas com base em imagens.

---

## **Instalação**

Certifique-se de que o Three.js está instalado no seu projeto:

```bash
npm install three
```

---

## **Uso Básico**

Importe o componente `MagicParticles` no seu projeto React:

```javascript
import React from 'react';
import MagicParticles from './MagicParticles';

function App() {
  return (
    <MagicParticles
      imageUrl="https://example.com/image.png"
      particleTextureUrl="https://example.com/particle-texture.png"
      particleSize={5}
      particleArea={50000}
      particleAmount={100000}
      ease={0.5}
      cameraConfig={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 1000] }}
      backgroundColor={0x000000}
      style={{ width: '100%', height: '500px' }}
    />
  );
}

export default App;
```

---

## **Parâmetros**

O `MagicParticles` aceita os seguintes parâmetros para personalização:

| Propriedade          | Tipo      | Descrição                                                                 | Valor Padrão                               |
|----------------------|-----------|---------------------------------------------------------------------------|-------------------------------------------|
| `imageUrl`           | `string`  | URL da imagem para as partículas                                          | `''`                                      |
| `particleTextureUrl` | `string`  | URL da textura usada nas partículas                                       | `https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png` |
| `particleSize`       | `number`  | Tamanho das partículas                                                    | `5`                                       |
| `particleArea`       | `number`  | Área de interação das partículas                                          | `50000`                                   |
| `particleAmount`     | `number`  | Quantidade total de partículas                                            | `100000`                                  |
| `ease`               | `number`  | Controle da suavidade do movimento das partículas                         | `0.5`                                     |
| `cameraConfig`       | `object`  | Configuração da câmera, incluindo `fov`, `near`, `far`, e `position`      | `{ fov: 65, near: 1, far: 10000, position: [0, 0, 800] }` |
| `backgroundColor`    | `number`  | Cor de fundo da cena em formato hexadecimal                               | `0x222222`                                |
| `style`              | `object`  | Estilo customizado do container                                           | `{ width: '100%', height: '100%' }`       |

---

## **Descrição dos Parâmetros**

### `imageUrl`

A URL da imagem base usada para gerar as partículas. Esta imagem será analisada para determinar a posição e cor das partículas.

### `particleTextureUrl`

A URL da textura aplicada a cada partícula. Por padrão, usa uma textura genérica para partículas.

### `particleSize`

Define o tamanho individual das partículas. Quanto maior o número, maior o tamanho das partículas.

### `particleArea`

Determina a área de interação das partículas com o mouse. Um valor maior resulta em uma área de influência maior.

### `particleAmount`

Define a quantidade total de partículas geradas. Ajuste com cuidado para evitar sobrecarregar a GPU em dispositivos menos potentes.

### `ease`

Controla a suavidade do movimento das partículas ao retornar à posição inicial.

### `cameraConfig`

Um objeto que define as configurações da câmera. As propriedades incluem:

- `fov`: Campo de visão (em graus).
- `near`: Distância mínima de renderização.
- `far`: Distância máxima de renderização.
- `position`: Posição inicial da câmera no espaço 3D (em `[x, y, z]`).

### `backgroundColor`

Define a cor de fundo da cena. Use valores hexadecimais, como `0x000000` para preto.

### `style`

Estiliza o container do canvas onde as partículas são renderizadas. Use esta propriedade para ajustar dimensões ou margens.

---

## **Exemplo Completo**

Aqui está um exemplo completo utilizando todas as propriedades configuráveis:

```javascript
import React from 'react';
import MagicParticles from './MagicParticles';

function App() {
  return (
    <MagicParticles
      imageUrl="https://example.com/image.png"
      particleTextureUrl="https://example.com/particle-texture.png"
      particleSize={4}
      particleArea={60000}
      particleAmount={80000}
      ease={0.3}
      cameraConfig={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 1000] }}
      backgroundColor={0x000000}
      style={{ width: '100%', height: '600px' }}
    />
  );
}

export default App;
```

---

## **Dicas de Uso**

- Certifique-se de que as URLs de imagens e texturas sejam acessíveis e carregáveis no navegador.
- Ajuste o parâmetro `particleAmount` com cuidado para equilibrar desempenho e qualidade visual.
- Utilize `cameraConfig` para criar diferentes perspectivas e efeitos visuais.

---

Se precisar de mais informações, consulte a documentação do Three.js ou entre em contato com a equipe de desenvolvimento.

