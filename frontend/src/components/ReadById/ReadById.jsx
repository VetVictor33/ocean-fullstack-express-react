import { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import './ReadById.css'


function ReadById() {
    //inicio do bloco feito com ajuda do chatgpt
    const input = useRef(null);
    function buscaIdItem(id) {
        request(id);
    }
    useEffect(() => {
        input.current.addEventListener('keypress', (event) => {
            if (event.key != 'Enter') {
                return
            }
            buscaIdItem(event.target.value)
            event.target.value = ''
        });
    }, []);
    //fim do bloco
    //const [nomedoestado, nomedafuncaoqueatualizaoestado] = usestate([])
    const [item, setItem] = useState([]);
    async function request(id) {
        const url = `http://localhost:3000/itens/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setItem(data)
    }

    return (
        <div className="ReadById">
            <div className="input-div">
                <label htmlFor="getItem">Digite o id da personagem:</label>
                <input type="text" ref={input} />
            </div>
            <div className="main">
                <Card key={'card-' + item._id} item={item} />
            </div>
        </div>
    )
}

export default ReadById;