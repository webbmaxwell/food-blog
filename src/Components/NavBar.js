import styled from "styled-components";
import { NavLink, Nav } from "react-router-dom";

import { useRoutes, A } from "hookrouter";
import routes from "./AppRouter";
import NotFoundPage from "./NotFoundPage";

export default function NavBar() {
    const routeResult = useRoutes(routes);

    return (
        <nav>
            <ul>
                <li>
                    <A href='/'>Home</A>
                    {routeResult || <NotFoundPage />}
                </li>
                <li>
                    All Posts
                </li>
                <li>
                    Recipes
                </li>
                <li>
                    About
                </li>
            </ul>
        </nav>
    )
}