import React from 'react';
import { Link } from 'gatsby';
import "../../styles/navbar.scss";
import styled from 'styled-components';
const resume = require("../../styles/images/Jake-Januszanis-Resume.pdf");

const NavWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2.5rem 2.5rem 0 0;
    gap: 3rem;
`
const StyledLink = styled(Link)`
    font-size: 2.5rem;
    padding-right: 2.2rem;
    text-decoration: none;
    color: #222;
    cursor: pointer;
    transition: all ease-in .1s;
    height: min-content;
    background-color: transparent;
    border: none;

    &:hover {
        font-weight: bold;
        color: #0a838a;
        transform: scale(1.1);
        transition: all ease-in .1s;
    }

`

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
        <NavWrapper>
            <StyledLink to="#about">About</StyledLink>
            <StyledLink to="#projects">Projects</StyledLink>
            <StyledLink to="#contact">Contact</StyledLink>
            <StyledLink as='button' onClick={openPdf} onKeyPress={handleKeyPress}>Resume</StyledLink>
        </NavWrapper>
    )
}

