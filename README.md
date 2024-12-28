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

![Demonstração do MagicParticles](./effects/magicparticles.gif)

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

