import logo from './abstract_garlic.png';
import './App.css';
import FrenchOnionSoup from './Components/BlogPosts/FrenchOnionSoup';

function AppMain () {
    return (
        <div className="App">
            <header className="App-header">
                <img 
                    src={logo} 
                    className="App-logo" 
                    alt="garlic logo" 
                />
                <h1>Max's Food Blog</h1>
                <h2>Scroll down to see the latest blogpost</h2>
            </header>
            <FrenchOnionSoup />
        </div>
    )
}

export default AppMain;