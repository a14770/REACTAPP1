import React, { useState } from 'react';

function Notas() {
    const [formData, setFormData] = useState({
        id: '',
        nomeAluno: '',
        disciplina: '',
        notaTeste: '',
        teste: '',
        notaTrabalhos: '',
        trabalhos: '',
        notadeAtitude: '',
        trabalhos2: '',
    });

    const [tarefas, setTarefas] = useState([]);
    const [notaFinal, setNotaFinal] = useState(0);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault(); 

         const mediaFinal = (
            (parseFloat(formData.notaTeste) * (parseFloat(formData.testes) / 100)) +
            (parseFloat(formData.notaTrabalhos) * (parseFloat(formData.trabalhos) / 100)) +
            (parseFloat(formData.atitudesNota) * (parseFloat(formData.trabalhos2) / 100))
        );

        const novaTarefa = {
            id: Date.now(),
            ...formData,
        };        
        setTarefas([...tarefas, novaTarefa]);
    }   

    function limparFormulario() { 
        setFormData({ id: '', nomeAluno: '', disciplina: '', notaTeste: '', teste: '', notaTrabalhos: '', trabalhos: '', notadeAtitude: '', trabalhos2: '' });
        setNotaFinal(0);
    }

    return (
        <div>
            <h1 className="text-left" style={{ color: 'black' }}>Cálculo da Nota Final </h1>
            <h2 className="text-left" style={{ color: 'black' }}>Dados do Aluno:</h2>

            <div className="form-row" >
                <form onSubmit={handleSubmit}>
                    <div className="form-row">   
                        <label htmlFor="nomeAluno" className="form-label">Nome Aluno:</label>
                        <input type="text" className="form-control" id="nomeAluno" placeholder="Carlos Santos" value={formData.nomeAluno} onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="disciplina">Disciplina:</label>
                        <input type="text" className="form-control" id="disciplina" placeholder="RC" value={formData.disciplina} onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="notaTeste">Nota dos Teste:</label>
                        <input type="text" className="form-control" id="notaTeste" placeholder="14" value={formData.notaTeste} onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="teste">(%) Teste:</label>
                        <input type="text" className="form-control" id="teste" placeholder="40" />
                    </div>

                    <div className="form-row">
                        <label htmlFor="notaTrabalhos">Nota dos Trabalhos:</label>
                        <input type="text" className="form-control" id="notaTrabalhos" placeholder="18" />
                    </div> 

                    <div className="form-row">
                        <label htmlFor="trabalhos">(%) Trabalhos:</label>
                        <input type="text" className="form-control" id="trabalhos" placeholder="40" />
                    </div>             

                    <div className="form-row">
                        <label htmlFor="notadeAtitude">Nota de Atitude:</label>
                        <input type="text" className="form-control" id="notadeAtitude" placeholder="17"/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="trabalhos2">(%) Trabalhos2:</label>
                        <input type="text" className="form-control" id="trabalhos2" placeholder="20" />
                    </div>       

                    <button type="button" className="btn btn-outline-secondary" onClick={limparFormulario}>Limpar</button>
                    <button type="submit" className="btn btn-outline-secondary">Calcular</button>

                </form>
            </div>
            
            <div className="mt-4">
                <h3>Nota Final: {notaFinal}</h3>
            </div>
        </div>
    );
}

export default Notas;
