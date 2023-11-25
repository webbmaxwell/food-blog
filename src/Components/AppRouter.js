import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './Home.js';
import { BlogPage } from './BlogPage.js';
import { Recipes } from './Recipes.js';

function AppRouter() {
    return (
        <div className="">
            <Route exact path="/" render={props => <HomePage />} />
            <Route path="/blogposts" render={props => <BlogPage />} />
            <Route path="/recipes" render={props => <Recipes />} />
        </div>
    )
}

export default AppRouter;