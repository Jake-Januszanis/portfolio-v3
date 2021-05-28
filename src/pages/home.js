import React from 'react';
import '../styles/home.scss';
import Navbar from "../pages/components/Navbar";
import ScrollBtn from "./components/Scroll-btn";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
    return (
      
    <section id="home">
      <div className="home-wrapper">
        <Navbar />
        <div className="home-flex">
          <div className="home-flex__1">
            <h1 className="home-header-primary">Jake Januszanis</h1>
            <h1 className="home-header-sub">Front-End Web Developer</h1>
              <div className="home-icons__container">
              <a href="https://github.com/Jake-Januszanis" target="_blank" className="home-icons"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jake-januszanis/" target="_blank" className="home-icons"><FaLinkedin /></a>
              </div>
          </div>
        </div>
        <a href="#about"><ScrollBtn /></a>
      </div>
    </section> 

    )
}
