import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleTheme}){
    return (<header>
        <nav>
            <Link to="/" class="link">Головна</Link>
            <Link to="/about" class="link">Про мене</Link>
            <Link to="/contacts" class="link">Контакти</Link>
            <button id="toggle-theme" className="btn btn-outline-primary" onClick={toggleTheme}> Dark mode </button>
        </nav>
    </header>);
}

export default Header;