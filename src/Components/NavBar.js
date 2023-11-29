import styled from "styled-components";
import { NavLink, Nav } from "react-router-dom";

import  from "./AppRouter";
import NotFoundPage from "./NotFoundPage";

export default function NavBar() {
    const routeResult = useRoutes(routes);

    return (
        <nav>
            <ul>
                <li>
                    Home
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