import { useEffect, useState } from "react";

function ListaCarros() {
    const [lista,setLista] = useState([]);

    
    useEffect(()=>{
        fetch("https://api.sheety.co/7295c19c3ab74a94203e2e5138ae92d0/trabalhoIw20262027/carros")
        //fetch("data.json")
        .then(response => response.json())
        .then(dados => setLista(dados.carros));

    },[]);
    

    const rows = lista.map( (carro) => {
        return (
            <tr>
                <td>{carro.marca}</td>
                <td>{carro.modelo}</td>
                <td>{carro.ano}</td>
            </tr>
        )
    });

    return (
        <table>
            {rows}
        </table>
    );
}

export default ListaCarros;