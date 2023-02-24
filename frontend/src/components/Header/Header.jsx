import "./Header.css";

function Header({ onButtonClick }) {
    const handleClick = (component) => {
        onButtonClick(component)
    }

    return (
        <header className="Header">
            <img src="../src/assets/react.svg" alt="logo" />
            <div className="buttons-div">
                <button onClick={() => handleClick('home')}>Home</button>
                <button onClick={() => handleClick('search')}>Buscar por ID</button>
            </div>
        </header>
    )
}

export default Header;