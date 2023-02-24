import Tag from '../Tag/Tag';
import './Card.css'


function Card(props) {
    const item = props.item;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>
            <img src={item.imagemUrl} alt="" />
            {item.tags && ( //renderização condicional, só renderiza se houver tags
                <Tag tags={item.tags} />
            )}
            <p>ID: {item._id}</p>
        </div>
    )
}

export default Card;