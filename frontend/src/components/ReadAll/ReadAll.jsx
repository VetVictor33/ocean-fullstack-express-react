import Card from "../Card/Card";
import "./ReadAll.css";


//Mock items
const items = [
    {
        "_id": "63ef87a3387ea92af85f95bd",
        "nome": "Rick Sanchez",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "_id": "63ef87df387ea92af85f95be",
        "nome": "Morty Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "_id": "63ef87f0387ea92af85f95bf",
        "nome": "Summer Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        "_id": "63ef8802387ea92af85f95c0",
        "nome": "Beth Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "_id": "63ef880b387ea92af85f95c1",
        "nome": "Jerry Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
]

function ReadAll() {
    return (
        <div className="ReadAll">
            {items.map(function (item) {
                return <Card key={'card-' + item._id} item={item} />;
            })}
        </div>
    )
}
export default ReadAll;