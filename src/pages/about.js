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
                       <p> Hi, I’m Jake, a Software Engineer based in San Diego, CA.</p>
                        <p>I enjoy designing and building modern web apps using React, TypeScript, Node.js, and PostgreSQL. Whether I'm developing new features, improving existing applications, or working on personal projects, I strive to write clean, maintainable code and create software that's both reliable and easy to use. 
                         </p>
                    </div>

                    <div className="about-flex__right">
                        <img className="about-flex__right-img" alt="Guy resting back on laptop" src={AboutSvg} ></img>
                    </div>
                </div> 
            </div>
        </section>
    )
}
