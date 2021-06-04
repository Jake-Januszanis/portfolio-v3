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
                        <p>Ironically my coding journey began nearly 3 years ago when I was out on a hike with a friend.
                         He mentioned to me how he had been a freelance web developer for over 5 years and explained that it was something that anyone is capable of as long as they are committed.
                         Both of us coming from a Brazilian Jiu-Jitsu background he told me “If you can learn Jiu-Jitsu then you can learn to code”.
                         </p>
                        <p>So that’s where it all began and since day one I knew that this is what I wanted to do for a career.
                         I love the problem-solving aspect of it and just learning how the web works behind the scenes is just so fascinating to me.
                         The more I learn about web development the more I appreciate the work that goes into building some of these modern-day apps.
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

