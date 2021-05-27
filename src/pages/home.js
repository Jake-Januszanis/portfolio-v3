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
      <FaGithub className="home-icons" />
      <FaLinkedin className="home-icons" />
      </div>
    </div>
      {/* <div className="home-flex__2">
        <p className="home-text">Web Developer that loves creating new web pages that are both fully responsive and follow modern design trends.</p>
      </div> */}
        </div> 
        <a href="#about"><ScrollBtn /></a>
      </div>
     </section> 

    )
}
