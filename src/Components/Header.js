import logo from "../abstract_garlic.png";
import "../App.css";

export default function Header() {
    return(
        <header className="App-header">
                <img 
                    src={logo} 
                    className="App-logo" 
                    alt="garlic logo" 
                />
                <h1>Max's Food Blog</h1>
                <h2>Scroll down to see the latest blogpost</h2>
        </header>
    )
}