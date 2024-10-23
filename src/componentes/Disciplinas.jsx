import NotaDisciplina from "./NotaDisciplina"
import "./Disciplinas.css"
import Card from "./Card";

function Disciplinas(props) {
    const disciplinas = props.listaDisciplinas;

    return (
        /*
        <div >
            {disciplinas.map((disciplina, index) => (
                <div key={index} className="disciplinas">
                    <NotaDisciplina 
                        nome={disciplina.nome}
                        valorNota={disciplina.valorNota}
                        dataAvalia={disciplina.dataAvalia}
                    />
                </div>
            ))}
        </div>
        */

        <Card>
            {
                disciplinas.map((disci) => (
                    <NotaDisciplina 
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