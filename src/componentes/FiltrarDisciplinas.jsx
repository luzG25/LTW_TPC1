import { useState } from 'react';

function FiltrarDisciplinas(props) {
    const filtroChangeHandler = (event) => {
        props.onFiltroChange(event.target.value);
    };

    return (
        <div>
            <label>Filtrar por ano</label>
            <select name="ano_filtro" id="ano_filto" onChange={filtroChangeHandler}>
                <option value="0">Todos</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    );
}

export default FiltrarDisciplinas;
