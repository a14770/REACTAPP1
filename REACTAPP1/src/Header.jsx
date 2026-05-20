import "./Header.css";
import Logo from "./Logo";
import heroImg from "./assets/hero.png";

function Header() {
    return (
        <div>
            <Logo><img src={heroImg} alt="Hero Vite" /></Logo>
            <nav>
                <a href="/">Home</a>
                <a href="/">Contactos</a>
            </nav>
            <div className="Clear"></div>
        </div>
    );
}

export default Header