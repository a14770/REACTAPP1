import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: '',
    });

    const [tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaTarefa = {
            id: Date.now(), // Gera um ID único com base no timestamp
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao,
        };        
        setTarefas([...tarefas, novaTarefa]);
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    function numTarefa() {
        const novaTarefa = {
            id: Date.now(), // Gera um ID único com base no timestamp
            titulo: '',
            data: '',
            descricao: '',
        };

        setFormData(novaTarefa);
        setTarefas([...tarefas, novaTarefa]);
        setDadosSubmetidos(novaTarefa);
    }

    function eliminarTarefa(id) {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }
    
    function limparTarefas() {
        setTarefas([]);
    }

    return (
        <div className="mt-4 now">

            <div className="col-6" >
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>
                        
                            setFormData({ ...formData, titulo: e.target.value })} required />         
                                   
                    </div>

                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} required />
                        
                    </div>
                    
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} required />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-outline-success">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-info"

                        onClick={numTarefa}>Nova Tarefa</button>   
                    <button type="button" className="btn btn-outline-danger"
                        onClick={limparTarefas}>Limpar Tarefas</button>
                    
                </form>

            </div>






            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Título:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.titulo}</h5>
                            <p>{tarefa.data}</p>
                            <p>{tarefa.descricao}</p>
                                <button type="button" className="btn btn-outline-danger" 
                                onClick={() => eliminarTarefa(tarefa.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>


            </div>

        </div>
    );
}
export default Tarefas;
