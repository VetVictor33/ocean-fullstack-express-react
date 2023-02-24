import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import './ReadById.css'


function ReadById() {
    let card = useRef(false);
    //inicio do bloco feito com ajuda do chatgpt
    const input = useRef(null);
    function buscaIdItem(event) {
        if (event.key != 'Enter' || !event.target.value) {
            return
        }
        request(event.target.value);
        event.target.value = ''
    }
    useEffect(() => {
        input.current.addEventListener('keyup', (event) => {
            buscaIdItem(event)
        });
        input.current.removeEventListener('keyup', (event) => {
            buscaIdItem(event)
        });
    }, []);
    //fim do bloco
    //const [nomedoestado, nomedafuncaoqueatualizaoestado] = usestate([])
    const [item, setItem] = useState([]);
    async function request(id) {
        const url = `https://rickandmorty-app-nzxp.onrender.com/personagem/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setItem(data)
        card.current = true;
    }

    return (
        <div className="ReadById">
            <div className="input-div">
                <label htmlFor="getItem">Digite o id da personagem:</label>
                <input type="text" ref={input} />
            </div>
            <div className="main">
                {card.current && <Card key={'card-' + item._id} item={item} />}
            </div>
        </div>
    )
}

export default ReadById;