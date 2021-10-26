import "./Navbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    <div className="itemContainer">
                        <Person classname="icon" />
                        <span>+54-230-435-9380</span>
                    </div>
                    <div className="itemContainer">
                        <Mail classname="icon" />
                        <span>alangiavino97@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={(() => setMenuOpen(!menuOpen))}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
