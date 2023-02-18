import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <img src="../src/assets/react.svg" alt="logo" />
            <div className="buttons-div">
                <button>Home</button>
                <button>Criar</button>
            </div>
        </header>
    )
}

export default Header;