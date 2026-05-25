import React, { useState } from 'react';

function Notas() {
 


    return (
        <div>
            <h1 className="text-left" style={{ color: 'black' }}>Cálculo da Nota Final </h1>
            <h2 className="text-left" style={{ color: 'black' }}>Dados do Aluno:</h2>   
            
            <div className="form-group">
                <label htmlFor="nome-">Nome Aluno:</label>
                <input type="text" className="form-control" id="nome" placeholder="Digite o nome do aluno" />
            </div>
        </div>
    );
}
export default Notas;
