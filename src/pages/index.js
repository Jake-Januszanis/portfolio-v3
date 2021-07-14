import React from "react";
import About from "../pages/about";
import Contact from "./contact";
import Home from "../pages/home"
import Projects from "./projects";
import '../styles/global.css';
import '../styles/variables.scss';
import "@fontsource/michroma";
import "@fontsource/montserrat";




export default function Main() {
  return (
    <>
    <Home />
    <Projects />
    <About />
    <Contact />
    </>
  )
}


