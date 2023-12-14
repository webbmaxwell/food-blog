import styled from "styled-components";
import { NavLink, Nav } from "react-router-dom";

import  from "./AppRouter";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>All Posts</Link></li>
                <li><Link>Recipes</Link></li>
                <li><Link>About</Link></li>
            </ul>
        </nav>
    )
}