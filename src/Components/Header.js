import logo from "../abstract_garlic.png";
import "../App.css";

export default function Header() {
    return(
        <header className="App-header">
                {/* <img 
                    src={logo} 
                    className="App-logo" 
                    alt="garlic logo" 
                /> */}
                <h1 className="title">Max's Food Blog</h1>
                <h3>Here is the latest blogpost:</h3>
        </header>
    )
}