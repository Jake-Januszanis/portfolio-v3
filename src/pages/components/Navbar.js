import React from 'react';
import { Link } from 'gatsby';
import "../../styles/navbar.scss";

export default function Navbar() {
    return (
        <nav>
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link" to="/">About</Link>
            <Link className="nav__link" to="/">Projects</Link>
            <Link className="nav__link" to="#">Contact</Link>
            <Link className="nav__link" to="#">Resume</Link>
        </nav>
    )
}
