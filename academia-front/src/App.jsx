import { Routes, Route, Link } from "react-router-dom"

import Alunos from "./pages/Alunos"
import Instrutores from "./pages/Instrutor"
import Planos from "./pages/Planos"
import Agendamentos from "./pages/Agendamentos"

function App(){

return(

<div>

<nav>

<Link to="/alunos">Alunos</Link>
<Link to="/instrutores">Instrutores</Link>
<Link to="/planos">Planos</Link>
<Link to="/agendamentos">Agendamentos</Link>

</nav>

<Routes>

<Route path="/alunos" element={<Alunos/>}/>
<Route path="/instrutores" element={<Instrutores/>}/>
<Route path="/planos" element={<Planos/>}/>
<Route path="/agendamentos" element={<Agendamentos/>}/>

</Routes>

</div>

)

}

export default App