import { useEffect, useState } from "react"

function Planos(){

const [planos,setPlanos] = useState([])

useEffect(()=>{

fetch("http://localhost:8080/planos")
.then(res => res.json())
.then(data => setPlanos(data))

},[])

return(

<div>

<h2>Planos da Academia</h2>

{planos.map(plano => (

<div key={plano.id} style={{
border:"1px solid black",
padding:"10px",
margin:"10px"
}}>

<h3>{plano.nome}</h3>

<p>{plano.descricao}</p>

<p>Duração: {plano.duracaoDias} dias</p>

<p>Valor: R$ {plano.valor}</p>

</div>

))}

</div>

)

}

export default Planos