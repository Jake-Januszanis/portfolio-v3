import React from 'react'
import "../styles/about.scss";
import AboutSvg from "../styles/images/about-svg.svg";

export default function About() {
    return (
        <section id="about">
            <div className="about-wrapper">
                <h1 className="about-title">About Me</h1>
                <div className="about-flex">
                    <div className="about-flex__left">
                       <p> Hello! I’m Jake Januszanis, a web developer currently located in Denver, CO.</p>
                        <p>I consider myself to be more of a frontend developer but have worked with backend environments enough that I am confident in my ability to be effective on either side of the development process.
                        As of recently, I have been obsessed with React and just love working with the component-based framework.</p>
                        <p>When I’m not at home staring at my code editor you can usually find me on the mats training Brazilian Jiu-Jitsu or up in the mountains enjoying some solitude in nature.</p> 

                    </div>

                    <div className="about-flex__right">
                        <img className="about-flex__right-img" alt="Guy resting back on laptop" src={AboutSvg} ></img>
                    </div>
                </div> 
            </div>
        </section>
    )
}
