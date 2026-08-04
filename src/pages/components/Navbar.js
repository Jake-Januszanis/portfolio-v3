import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const resume = require("../../styles/images/Jake-Januszanis-Resume.pdf");

const NavWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: 10vh;
    margin: 2.5rem .5rem;

    @media (max-width: 500px) {
        width: 100%;
        margin: 2.5rem 1rem 2.5rem 0;
    }
`;

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

    &:hover,
    &:focus-visible {
        font-weight: bold;
        color: #0a838a;
        transform: scale(1.1);
        transition: all ease-in .1s;
    }

    @media (min-width: 1750px) {
        font-size: 3rem;
        padding-right: 2.4rem;
    }

    @media (max-width: 1200px) {
        font-size: 2.3rem;
        padding-right: 2rem;
    }

    @media (max-width: 500px) {
        font-size: 2rem;
    }
`;

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
        <NavWrapper aria-label="Primary navigation">
            <StyledLink to="#about">About</StyledLink>
            {/* <StyledLink to="#projects">Projects</StyledLink> */}
            <StyledLink to="#contact">Contact</StyledLink>
            <StyledLink as='button' onClick={openPdf} onKeyPress={handleKeyPress}>Resume</StyledLink>
        </NavWrapper>
    )
}
