import logo from './abstract_garlic.png';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FrenchOnionSoup from './Components/BlogPosts/FrenchOnionSoup';

function AppMain () {
    return (
        <div className="App">
            <NavBar />
            <Header />
            <FrenchOnionSoup />
        </div>
    )
}

export default AppMain;