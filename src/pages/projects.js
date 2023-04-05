import React from 'react';
import "../styles/projects.scss";
// import pomoTimerImg from '../styles/images/pomoTimerApp.png';
import HomeScreen from '../styles/images/HomeScreen.png';
import WeatherAppDisplay from '../styles/images/WeatherAppDisplay.png';
import WeatherAppHome from '../styles/images/WeatherAppHome.png'
import MovieScreen from '../styles/images/MovieScreen.png';

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-wrapper">
                <h1 className="projects-title">Projects</h1>

                <div className="projects-flex-container">
                    <div className="projects-flex-container__left">
                        <h2 className="projects-flex-container__left-title">Flingo</h2>
                        <h3 className="projects-flex-container__left-subtitle">(Expo, React Native, JavaScript, NodeJS, Express, Heroku)</h3>
                        <p className="projects-flex-container__left-description">
                        Flingo is a mobile app that gives movie recommendations to users based on genres they choose along with the streaming services they have access to.
                        The idea of this project was to limit the amount of time spent scrolling on apps like Netflix or Hulu. This project is still in the process of being completed so it is not available for download at this time. For more details 
                        check out the Github repo which can be found by clicking the source code link below.
                        </p>
                        <div className="projects-flex-container__left-links">
                            <a href="https://github.com/Jake-Januszanis/rn-movie-app-frontend" className="projects-flex-container__left-links-btn" target="_blank" rel="noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="mobile-img-container">
                        <img width='210px' alt="Weather app screenshot" src={HomeScreen}></img>
                        <img width='210px;' alt="Weather app screenshot" src={MovieScreen}></img>
                    </div>
                </div>

                <div className="projects-flex-container">
                    <div className="projects-flex-container__left">
                        <h2 className="projects-flex-container__left-title">Express Weather</h2>
                        <h3 className="projects-flex-container__left-subtitle">(React, Tailwind CSS, Express, Heroku)</h3>
                        <p className="projects-flex-container__left-description">
                        Weather app that takes 5 digit US zip code and retrieves data from OpenWeatherMap API.
                        The app displays either the current forecast or gives the user the option for a 5 day extended forecast.
                        The frontend was built with React and Tailwind CSS while handling the API calls with an Express server on the backend. 
                        </p>
                        <div className="projects-flex-container__left-links">
                            <a href="https://github.com/Jake-Januszanis/react-weather" className="projects-flex-container__left-links-btn" target="_blank" rel="noreferrer">Source Code</a>
                            <a href="https://react-weather-v2.herokuapp.com/" className="projects-flex-container__left-links-btn" target="_blank" rel="noreferrer">Live Site</a>
                        </div>
                    </div>
                    <div className="mobile-img-container">
                        <img width='210px' alt="Weather app screenshot" src={WeatherAppHome}></img>
                        <img width='210px;' alt="Weather app screenshot" src={WeatherAppDisplay}></img>
                    </div>
                </div>

                {/* <div className="projects-flex-container">
                    <div className="projects-flex-container__left">
                        <h2 className="projects-flex-container__left-title">Pomodoro Timer</h2>
                        <h3 className="projects-flex-container__left-subtitle">(HTML5, SASS, JavaScript, EJS, Express, Mongoose, MongoDB, Heroku)</h3>
                        <p className="projects-flex-container__left-description">
                        Pomodoro timer that allows users to keep track of time spent studying using the Pomodoro technique.
                         Users can either use the guest timer or create an account which then allows them to save data to a 
                         MongoDB database to compare results for future analytics.
                         For security purposes, all passwords are hashed and salted using the bcrypt npm library.  
                        </p>
                        <div className="projects-flex-container__left-links">
                            <a href="https://github.com/Jake-Januszanis/pomodoro-timer" className="projects-flex-container__left-links-btn" target="_blank" rel="noreferrer">Source Code</a>
                            <a href="https://pomo-focus-timer.herokuapp.com/" className="projects-flex-container__left-links-btn" target="_blank" rel="noreferrer">Live Site</a>
                        </div>
                    </div>
                    <div className="projects-flex-container__right">
                        <img className="projects-flex-container__right-image" alt="Pomodoro app screenshot" src={pomoTimerImg}></img>
                    </div>
                </div> */}
            </div>

        </section>
    )
}
