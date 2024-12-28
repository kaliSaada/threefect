import React from 'react';
import { MagicParticles } from 'threeffect';

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <MagicParticles
                imageUrl="https://picsum.photos/id/237/400/300" // URL da imagem usada para as partículas
                particleSize={4} // Tamanho das partículas
                particleArea={60000} // Área de interação
                particleAmount={50000} // Quantidade de partículas
                ease={0.3} // Velocidade de relaxamento das partículas
                style={{ width: '100%', height: '100%' }} // Estilo do container
            />
        </div>
    );
}

export default App;
