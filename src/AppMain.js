import logo from './garlic.png';
import './App.css';

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
            </header>
        </div>
    )
}

export default AppMain;