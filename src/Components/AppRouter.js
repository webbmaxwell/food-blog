import React from 'react';
import { useRoutes } from 'hookrouter';

import { HomePage } from './Home.js';
import BlogPage from './BlogPage.js';
import Recipes from './Recipes.js';
import About from './About.js';
import NotFoundPage from './NotFoundPage.js';

const routes = {
    '/': () => <HomePage />,
    '/blogposts': () => <BlogPage />,
    '/blogposts/:id': ({id}) => <BlogPage id={id} />,
    '/recipes': () => <Recipes />,
    '/recipes/:id': ({id}) => <Recipes id={id} />,
    '/about': () => <About />
};

const MyApp = () => {
    const routeResult = useRoutes(routes);

    return routeResult || <NotFoundPage />;
};