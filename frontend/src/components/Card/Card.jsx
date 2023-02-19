import Tag from '../Tag/Tag';
import './Card.css'

let i = 0
let xoxota = ['xoxota', 'xoxotinha', 'xoxoxoxotinha']

function Card(props) {
    const item = props.item;
    const itemTags = props.item.tags;
    return (
        <div className="Card">
            <h1>{item.nome}</h1>
            <img src={item.imagemUrl} alt="" />
            <Tag tags={item.tags} />
        </div>
    )
}

export default Card;