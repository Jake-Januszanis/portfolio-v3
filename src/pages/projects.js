import React from 'react';
import "../styles/projects.scss";
import weatherAppImg from '../styles/images/weather-app-img.png';


export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-wrapper">
                <h1 className="projects-title">Projects</h1>

                <div className="projects-flex-container">
                    <div className="projects-flex-container__left">
                        <h2 className="projects-flex-container__left-title">Weather App</h2>
                        <h3 className="projects-flex-container__left-subtitle">React, Tailwind CSS, Express, Heroku</h3>
                        <p className="projects-flex-container__left-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum in nulla nec ultricies.
                        Ut mattis mollis tortor. Praesent commodo sit amet turpis lacinia euismod. Suspendisse erat lectus, sagittis nec quam quis, egestas venenatis enim.
                        Donec fringilla congue sapien vitae mollis. Sed id ante mattis, facilisis risus non, aliquet massa. 
                        </p>
                        <div className="projects-flex-container__left-links">
                            <a href="https://github.com/Jake-Januszanis/react-weather" className="projects-flex-container__left-links-btn" target="_blank">Source Code</a>
                            <a href="https://react-weather-v2.herokuapp.com/" className="projects-flex-container__left-links-btn" target="_blank">Live Site</a>
                        </div>
                    </div>
                    <div className="projects-flex-container__right">
                        <img className="projects-flex-container__right-image" src={weatherAppImg}></img>
                    </div>
                </div>

                <div className="projects-flex-container">
                    <div className="projects-flex-container__left">
                        <h2 className="projects-flex-container__left-title">Pomodoro Timer</h2>
                        <h3 className="projects-flex-container__left-subtitle">HTML5, SASS, JavaScript, EJS, Express, Mongoose, MongoDB, Heroku</h3>
                        <p className="projects-flex-container__left-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum in nulla nec ultricies.
                        Ut mattis mollis tortor. Praesent commodo sit amet turpis lacinia euismod. Suspendisse erat lectus, sagittis nec quam quis, egestas venenatis enim.
                        Donec fringilla congue sapien vitae mollis. Sed id ante mattis, facilisis risus non, aliquet massa. 
                        </p>
                        <div className="projects-flex-container__left-links">
                            <a href="https://github.com/Jake-Januszanis/pomodoro-timer" className="projects-flex-container__left-links-btn" target="_blank"> Source Code</a>
                            <a href="https://pomo-focus-timer.herokuapp.com/" className="projects-flex-container__left-links-btn" target="_blank">Live Site</a>
                        </div>
                    </div>
                    <div className="projects-flex-container__right">
                        <img className="projects-flex-container__right-image" src={weatherAppImg}></img>
                    </div>
                </div>
            </div>

        </section>
    )
}
