import React from "react";
import About from "../pages/about";
import Home from "../pages/home"
import Projects from "./projects";
import '../styles/global.css';
import "@fontsource/michroma";
import "@fontsource/montserrat";
import Contact from "./contact";



export default function Main() {
  return (
    <>
    <Home />
    <About />
    <Projects />
    <Contact />
    </>
  )
}


