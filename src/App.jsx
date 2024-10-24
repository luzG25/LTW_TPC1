import { useState } from 'react'
import './App.css'
import Disciplinas from "./componentes/Disciplinas"
import NovaDisciplina from "./componentes/NovaDisciplina"

function App() {

  const NOTAS_DISCIPLINAS = []

  const [notas, setDadosDisciplina] = useState(NOTAS_DISCIPLINAS)

  const addDisciplinaHandler = (disciplina) => {
    setDadosDisciplina( (prevState) => { 
      // ... operador spread
      return [disciplina, ...prevState];
    } )
  }

  return (
    <div> 
      <NovaDisciplina onAddDisciplina={addDisciplinaHandler}/>
      <Disciplinas
        listaDisciplinas={notas}

       />
    </div>
  )
}

export default App
