import React from 'react';
import { Link } from 'gatsby';
import "../../styles/navbar.scss";

export default function Navbar() {
    return (
        <nav>
            {/* <h1 className="nav-left">Jake Januszanis</h1> */}
            <div className="nav-right">
            <Link className="nav-right__link" to="/">Home</Link>
            <Link className="nav-right__link" to="/">About</Link>
            <Link className="nav-right__link" to="/">Projects</Link>
            <Link className="nav-right__link" to="#">Contact</Link>
            <Link className="nav-right__link" to="#">Resume</Link>
            </div>
        </nav>
    )
}
