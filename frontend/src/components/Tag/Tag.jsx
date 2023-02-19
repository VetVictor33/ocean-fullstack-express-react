import './Tag.css';

function Tag(props) {
    let tags = props.tags;
    return (
        <div className="Tag">
            {tags.map(function (tag) {
                return <p key={'tag-' + tag}>{tag}</p>;
            })}
        </div>
    )
}

export default Tag;