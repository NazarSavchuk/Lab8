import React from "react"
import './Header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Events from "./Events";


function Header() {
    return (
        <header className="container">
            <a href="../index.html">
                <div className="logo">
                    <i class="fab fa-react"></i>
                    NazarSavchuk
                </div>
                </a>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
        </header>
        
    )
}

export default Header