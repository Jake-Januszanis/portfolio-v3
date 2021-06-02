import React from 'react';
import { Link } from 'gatsby';
import "../../styles/navbar.scss";
const resume = require("../../styles/images/Jake-Januszanis-Resume.pdf");

export default function Navbar() {

    function openPdf() {
        window.open(resume.default, "")
    }
    function handleKeyPress (event) {
        if (event.key === 13) {
            window.open(resume.default, "")
        }
        return;
    }


    return (
        <nav>
            <Link className="nav__link" to="#about">About</Link>
            <Link className="nav__link" to="#projects">Projects</Link>
            <Link className="nav__link" to="#contact">Contact</Link>
            <button className="nav__link nav__link-btn" onClick={openPdf} onKeyPress={handleKeyPress}>Resume</button>
        </nav>
    )
}

