import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (<header>
        <nav>
            <Link to="/" class="link">Головна</Link>
            <Link to="/about" class="link">Про мене</Link>
            <Link to="/contacts" class="link">Контакти</Link>
        </nav>
    </header>);
}

export default Header;