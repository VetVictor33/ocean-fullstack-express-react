import { useState } from "react";


function ReadById() {

    const [item, setItem] = (useState[]);
    async function request(id) {
        const url = `http://localhost:3000/itens/${id}`;
        const response = await fetch(url);
        const data = await response.json();

        setItem(data)
    }

    document.querySelector('#getItem').addEventListener('click', () => {

    })


    return (
        <div className="ReadById">
            <label htmlFor="getItem"></label>
            <input type="text" id="getItem" />
        </div>
    )
}

export default ReadById;