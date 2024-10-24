import NotaDisciplina from "./NotaDisciplina";
import "./Disciplinas.css";
import Card from "./Card";
import FiltrarDisciplinas from "./filtrarDisciplinas";
import { useState } from 'react';

function Disciplinas(props) {
    const disciplinas = props.listaDisciplinas;

    let aplicarFiltro = false

    // Estado para o ano filtrado
    const [filtroAno, setFiltroAno] = useState('None');

    // Função que atualiza o filtro
    const filtroChangeHandler = (anoSelecionado) => {
        setFiltroAno(anoSelecionado);
    };

    const disciplinasFiltradas = filtroAno === '0' 
    ? disciplinas 
    : disciplinas.filter(disciplina => disciplina.dataAvalia.getFullYear().toString() === filtroAno);


    

    return (
        <Card>
            <FiltrarDisciplinas onFiltroChange={filtroChangeHandler} />
            
            {
                disciplinasFiltradas.map((disci) => (
                    <NotaDisciplina 
                        key={disci.id}  
                        nome={disci.nome}
                        valorNota={disci.valorNota}
                        dataAvalia={disci.dataAvalia}
                    />
                ))
            }
            
        </Card>
    );
}

export default Disciplinas;