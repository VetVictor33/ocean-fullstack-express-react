import { useEffect, useState } from "react";
import Card from "../Card/Card";


function ReadById() {

    const [item, setItem] = useState([]);
    async function request(id) {
        const url = `http://localhost:3000/itens/${id}`;
        const response = await fetch(url);
        const data = await response.json();

        setItem(data)
    }

    document.querySelector('#getItem').addEventListener('keypress', (e) => {
        if (e.key != 'Enter') {
            return
        }
        useEffect(function () {
            request(e.target.value);
        }, [])

    })

    return (
        <div className="ReadById">
            <div className="input-div">
                <label htmlFor="getItem"></label>
                <input type="text" id="getItem" />
            </div>
            <div className="main">
                <Card key={'card-' + item._id} item={item} />
            </div>
        </div>
    )
}

export default ReadById;