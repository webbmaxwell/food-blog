import styled from "styled-components";
import { NavLink, Nav } from "react-router-dom";

import  from "./AppRouter";

export default function NavBar() {
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