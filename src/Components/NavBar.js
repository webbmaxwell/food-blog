import styled from "styled-components";
import { Link, Nav } from "react-router-dom";
import { AllPosts } from "./BlogPosts/AllPosts";


export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li>
                    <Link to="/blogposts" >All Posts</Link>
                </li>
                <li><Link to="/recipes" >Recipes</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </nav>
    )
}