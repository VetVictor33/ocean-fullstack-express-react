import Card from "../Card/Card";
import "./ReadAll.css";

//React Hooks
import { useEffect, useState } from "react";


//Mock items
const itemsMock = [
    {
        "_id": "63ef87a3387ea92af85f95bd",
        "nome": "Rick Sanchez",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "tags": ['cientista', 'pai', 'avô']
    },
    {
        "_id": "63ef87df387ea92af85f95be",
        "nome": "Morty Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        //"tags": ['adolescente', 'filho', 'neto']
    },
    {
        "_id": "63ef87f0387ea92af85f95bf",
        "nome": "Summer Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "tags": ['adolescente', 'filha', 'neta']
    },
    {
        "_id": "63ef8802387ea92af85f95c0",
        "nome": "Beth Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "tags": ['veterinária', 'filha', 'esposa']
    },
    {
        "_id": "63ef880b387ea92af85f95c1",
        "nome": "Jerry Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "tags": ['desempregado', 'genro', 'marido']
    }
]

function ReadAll() {

    /*const itemsState = useState([]);
    const item = itemsState[0];
    const setItems = [1];*/
    //codigo acima simplificado
    const [items, setItems] = useState([]);

    async function request() {
        //const url = 'http://localhost:3000/personagens'
        const url = 'https://rickandmorty-app-nzxp.onrender.com/itens'
        const response = await fetch(url);
        const data = await response.json();

        setItems(data)//função para renderizar novamente o componente
    }

    //impede que o componente entre em loop infito por causa do setItems()
    useEffect(function () {
        request()
    }, [])

    return (
        <div className="ReadAll">
            {items.map(function (item) {
                return <Card key={'card-' + item._id} item={item} />;
            })}
        </div>
    )
}
export default ReadAll;