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
                       <p> Hello! I’m Jake Januszanis, a Front End Developer currently located in Denver, CO.</p>
                        <p>I focus on building user-friendly web pages with an emphasis on simple & clean designs.
                        I’m constantly looking for new ways to improve my work while also staying updated on the newest trends.  
                         </p>
                         <p>
                         My technology of choice is React but I am also proficient in building projects using HTML, CSS, and JavaScript.
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

