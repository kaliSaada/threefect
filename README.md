# Threeffect

Threeffect é uma biblioteca modular e extensível para criar efeitos visuais impressionantes com Three.js em projetos 3D. Ela simplifica a aplicação de animações, partículas, shaders e mais, permitindo que desenvolvedores foquem na criatividade.

---

## **Visão Geral**

- **Efeitos Modulares**: Cada efeito pode ser usado de forma independente.
- **Baseado em Three.js**: Aproveite a flexibilidade e performance do Three.js.
- **Fácil de Usar**: API intuitiva para iniciar rapidamente.
- **Customizável**: Configure parâmetros como tamanhos, texturas, animações e mais.

---

## **Instalação**

Instale o Threeffect via npm:

```bash
npm install threeffect
```

---

## **Estrutura dos Efeitos**

Cada efeito está disponível como um módulo separado. Exemplos de efeitos disponíveis:

- [**MagicParticles**](./effects/MagicParticles.md): Um sistema avançado de partículas interativas.

-     ![Demonstração do MagicParticles](./effects/magicparticles.mp4)

Cada efeito possui seu próprio README com instruções específicas.

---

## **Como Usar**

### Uso de um efeito específico

```javascript
import React from 'react';
import { MagicParticles } from 'threeffect';

function App() {
  return (
    <div>
      <h1>Exemplo de MagicParticles</h1>
      <MagicParticles
        imageUrl="https://example.com/image.png"
        particleTextureUrl="https://example.com/particle-texture.png"
        particleSize={4}
        particleArea={60000}
        particleAmount={100000}
        ease={0.3}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
}

export default App;
```

---

## **Contribuindo**

### Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações e adicione commits.
4. Envie um pull request com uma descrição clara das mudanças.

### Estrutura do Código

- **`src/effects`**: Contém os módulos de efeitos individuais.
- **`src/utils`**: Funções auxiliares compartilhadas pelos efeitos.
- **`dist`**: Contém o código compilado para distribuição.

### Testando Locamente

Use o comando abaixo para rodar um exemplo local:

```bash
npm start
```

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.



# MagicParticles

`MagicParticles` é um efeito de partículas interativas configuráveis que reagem ao movimento do mouse. É ideal para criar animações dinâmicas com base em imagens.

---

## **Demonstração em Vídeo**

Confira um vídeo demonstrativo do funcionamento do MagicParticles:

<video controls>
  <source src="effects/magicparticles.mp4" type="video/mp4">
  Seu navegador não suporta a reprodução de vídeos.
</video>

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

| Propriedade          | Tipo     | Descrição                                         | Valor Padrão                                                                        |
| -------------------- | -------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `imageUrl`           | `string` | URL da imagem para as partículas                  | `''`                                                                                |
| `particleTextureUrl` | `string` | URL da textura usada nas partículas               | `https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png` |
| `particleSize`       | `number` | Tamanho das partículas                            | `5`                                                                                 |
| `particleArea`       | `number` | Área de interação das partículas                  | `50000`                                                                             |
| `particleAmount`     | `number` | Quantidade total de partículas                    | `100000`                                                                            |
| `ease`               | `number` | Controle da suavidade do movimento das partículas | `0.5`                                                                               |
| `style`              | `object` | Estilo customizado do container                   | `{ width: '100%', height: '100%' }`                                                 |

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

