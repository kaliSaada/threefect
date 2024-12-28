# MagicParticles

`MagicParticles` é um efeito de partículas interativas configuráveis que reagem ao movimento do mouse. É ideal para criar animações dinâmicas com base em imagens.

---

## **Instalação**

Certifique-se de que o Threeffect está instalado:

```bash
npm install threeffect
```

---

## **Uso Básico**

Importe o componente `MagicParticles` no seu projeto React:

```javascript
import React from 'react';
import { MagicParticles } from 'threeffect';

function App() {
  return (
    <MagicParticles
      imageUrl="https://example.com/image.png"
      particleTextureUrl="https://example.com/particle-texture.png"
      particleSize={5}
      particleArea={50000}
      particleAmount={100000}
      ease={0.5}
      style={{ width: '100%', height: '500px' }}
    />
  );
}

export default App;
```

---

## **Parâmetros**

O `MagicParticles` aceita os seguintes parâmetros para personalização:

| Propriedade          | Tipo      | Descrição                                      | Valor Padrão                               |
|----------------------|-----------|------------------------------------------------|-------------------------------------------|
| `imageUrl`           | `string`  | URL da imagem para as partículas               | `''`                                      |
| `particleTextureUrl` | `string`  | URL da textura usada nas partículas            | `https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png` |
| `particleSize`       | `number`  | Tamanho das partículas                         | `5`                                       |
| `particleArea`       | `number`  | Área de interação das partículas               | `50000`                                   |
| `particleAmount`     | `number`  | Quantidade total de partículas                 | `100000`                                  |
| `ease`               | `number`  | Controle da suavidade do movimento das partículas | `0.5`                                   |
| `style`              | `object`  | Estilo customizado do container                | `{ width: '100%', height: '100%' }`      |

---

## **Exemplo Completo**

Aqui está um exemplo completo utilizando todas as propriedades configuráveis:

```javascript
import React from 'react';
import { MagicParticles } from 'threeffect';

function App() {
  return (
    <MagicParticles
      imageUrl="https://example.com/image.png"
      particleTextureUrl="https://example.com/particle-texture.png"
      particleSize={4}
      particleArea={60000}
      particleAmount={80000}
      ease={0.3}
      style={{ width: '100%', height: '600px' }}
    />
  );
}

export default App;
```

---

## **Descrição dos Parâmetros**

- **`imageUrl`**: URL da imagem base usada para gerar as partículas.
- **`particleTextureUrl`**: URL da textura aplicada a cada partícula.
- **`particleSize`**: Define o tamanho individual das partículas (quanto maior o número, maior o tamanho).
- **`particleArea`**: Determina a área de interação das partículas com o mouse.
- **`particleAmount`**: Define a quantidade total de partículas geradas.
- **`ease`**: Controla a suavidade do movimento das partículas ao retornar à posição inicial.
- **`style`**: Estiliza o container do canvas onde as partículas são renderizadas.

---

## **Dicas de Uso**

- Certifique-se de que as URLs de imagens e texturas sejam acessíveis e carregáveis no navegador.
- Ajuste o parâmetro `particleAmount` com cuidado para evitar sobrecarregar a GPU em dispositivos mais lentos.

---

Se precisar de mais informações, consulte o [README principal](../README.md) do projeto.

