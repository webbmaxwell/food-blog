import logo from './abstract_garlic.png';
import './App.css';
import Header from './Components/Header';
import FrenchOnionSoup from './Components/BlogPosts/FrenchOnionSoup';

function AppMain () {
    return (
        <div className="App">
            <Header />
            <FrenchOnionSoup />
        </div>
    )
}

export default AppMain;