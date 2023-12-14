import logo from './abstract_garlic.png';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FrenchOnionSoup from './Components/BlogPosts/FrenchOnionSoup';
import AppRouter from './Components/AppRouter';
import Home from './Components/Home';
import { AllPosts } from './Components/BlogPosts/AllPosts';

import { Route, Routes } from 'react-router-dom';

function AppMain () {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blogposts" element={<AllPosts />}/>
                <Route path="/recipes"/>
                <Route path="/about"/>
            </Routes>
            {/* <AppRouter /> */}
        </div>
    )
}

export default AppMain;