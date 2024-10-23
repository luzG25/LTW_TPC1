import "./DataAvalia.css"

function DataAvalia(props) {
    const dia = props.dataAvalia.toLocaleString('pt-PT', {day: '2-digit'})
    const mes = props.dataAvalia.toLocaleString('pt-PT', {month: 'long'})
    const ano = props.dataAvalia.getFullYear();

    return (
        <div className="avalia-date">
            <div className="avalia-date__day">{dia}</div>
            <div className="avalia-date__month">{mes}</div>
            <div className="avalia-date__year">{ano}</div>
        </div>
    )
}

export default DataAvalia