import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from './Home.js';
import { BlogPage } from './BlogPage.js';
import { Recipes } from './Recipes.js';

function AppRouter() {
    return (
        <div className="">
            <Route exact path="/" render={props => <HomePage />} />
            <Route 
                path="/blogposts" 
                render={props => <BlogPage {...props}/>} 
            />
            <Route 
                path="/recipes" 
                render={props => <Recipes {...props}/>} 
            />
        </div>
    )
}

export default AppRouter;