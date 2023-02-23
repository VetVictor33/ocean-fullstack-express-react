import "./Header.css";

function Header() {

    const btn = document.querySelectorAll('button');
    for (let bt of btn) {
        bt.addEventListener('click', () => {
            bt.style.backgroundColor = 'red'
        })
    }

    return (
        <header className="Header">
            <img src="../src/assets/react.svg" alt="logo" />
            <div className="buttons-div">
                <button href="#">Home</button>
                <button href="#">Criar</button>
            </div>
        </header>
    )
}

export default Header;