import logo from './abstract_garlic.png';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FrenchOnionSoup from './Components/BlogPosts/FrenchOnionSoup';
import AppRouter from './Components/AppRouter';
import { AllPosts } from './Components/BlogPosts/AllPosts';

import { Route, Routes } from 'react-router-dom';

function AppMain () {
    return (
        <div className="App">
            <Routes>
                <Route path="/"/>
                <Route path="/blogposts" element={<AllPosts />}/>
                <Route path="/recipes"/>
                <Route path="/about"/>
            </Routes>
            <NavBar />
            <Header />
            <FrenchOnionSoup />
            {/* <AppRouter /> */}
        </div>
    )
}

export default AppMain;