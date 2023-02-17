import './Card.css'

function Card(props) {
    const item = props.item;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>
            <img src={item.imagemUrl} alt="" />
            <p>Esse é o card bom, que card bom!</p>
        </div>
    )
}

export default Card;