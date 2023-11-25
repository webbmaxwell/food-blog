import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './Home.js';
import BlogPage from './BlogPage.js';
import Recipes from './Recipes.js';
import About from './About.js';

function AppRouter() {
    return (
        <Router>
            <Routes className="">
                <Route exact path="/" render={props => <HomePage />} />
                <Route 
                    path="/blogposts" 
                    render={props => <BlogPage {...props}/>} 
                />
                <Route 
                    path="/recipes" 
                    render={props => <Recipes {...props}/>} 
                />
                <Route
                    path="/about"
                    render={props => <About {...props}/>}
                />
            </Routes>
        </Router>
    )
}

export default AppRouter;