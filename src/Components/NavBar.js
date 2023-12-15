import styled from "styled-components";
import { Link, Nav } from "react-router-dom";
import { AllPosts } from "./BlogPosts/AllPosts";
import logo from "../abstract_garlic.png";
import "../App.css";


export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-group">
                <img 
                    src={logo}
                    className="App-logo"
                    alt="garlic logo"
                />
                <li>
                    <Link to="/" className="nav-item" reloadDocument>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/blogposts" className="nav-item" >
                        All Posts
                    </Link>
                </li>
                <li>
                    <Link to="/recipes" className="nav-item" >
                        Recipes
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-item" >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}