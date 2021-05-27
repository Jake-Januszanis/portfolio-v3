import React from 'react'
import "../styles/about.scss";
import AboutSvg from "../styles/images/about-svg.svg";
import ScrollBtn from './components/Scroll-btn';

export default function About() {
    return (
        <section id="about">
            <div className="about-wrapper">
                <h1 className="about-title">About Me</h1>
                <div className="about-flex">
                    <div className="about-flex__left">
                        <p className="about-flex__left-text">
                            LoremFugiat Lorem esse commodo tempor est ex. Est veniam quis aliqua ullamco consequat fugiat esse excepteur.
                            Adipisicing sunt mollit ea anim eu consequat esse mollit eu consectetur ex. Nostrud ullamco consequat velit veniam nulla minim nostrud do dolor velit aute.
                            Eiusmod adipisicing consectetur consectetur ea eu do consequat commodo aliqua velit id reprehenderit. Consequat commodo tempor dolore cupidatat eiusmod sunt eiusmod velit do labore duis duis commodo dolor.
                        </p>
                    </div>

                    <div className="about-flex__right">
                        <img className="about-flex__right-img" src={AboutSvg} ></img>
                    </div>
                </div> 
            </div>
            {/* <a href="#projects"><ScrollBtn /></a> */}
        </section>
    )
}
