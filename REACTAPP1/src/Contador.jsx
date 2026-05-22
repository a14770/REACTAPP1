import { useState } from 'react';

function Contador() {
    const [contagem, setContagem] = useState(0);
    function aumentar() {
        setContagem(contagem + 1);
    }

    function aumentar10() {
        setContagem(contagem + 10);
    }    
    function diminuir() {
        if (contagem > 0) setContagem(contagem - 1);
    }
    function reiniciar() {
        setContagem(0);
    }
    return (
    
        
        <div className="text-center mt-4">
            <h1 className="text-center text-primary">Contador</h1>
            <h3>Contador: {contagem}</h3>
            {/* Cada botão altera o estado de forma diferente */}
            <button className="btn btn-success  mr-2" onClick={aumentar10}>
                +10
            </button>

            <button className="btn btn-success  mr-2" onClick={aumentar}>
                +
            </button>

            <button className="btn btn-info   mr-2" onClick={diminuir}>
                -
            </button>
            <button className="btn btn-danger" onClick={reiniciar}>
                Reset
            </button>
        </div>
    );
}
export default Contador;