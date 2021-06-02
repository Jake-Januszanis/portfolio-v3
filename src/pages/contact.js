import React from 'react';
import "../styles/contact.scss";

export default function Contact() {
    return (
        <section id="contact">
        <div className="contact-wrapper">
        <h1 className="contact__title">Contact</h1>
        <div className="contact__form-container">
            <form className="contact__form" name="contact" method="post">
              
                <div className="contact__form-group">
                    <input className="contact__form-input" type="text" id="name" name="name" placeholder=" " required></input>
                    <label className="contact__form-label" htmlFor="name">Name:</label>

                </div>

                <div className="contact__form-group">
                    <input className="contact__form-input" type="email" id="email" placeholder=" " name="email" required></input>
                    <label className="contact__form-label" htmlFor="email">Email:</label>
                </div>

                <div className="contact__form-group">
                    <textarea className="contact__form-textarea" rows="3" id="message" name="message" maxLength="500" placeholder=" " required></textarea>
                    <label className="contact__form-label" htmlFor="message">Message:</label>
                </div>
                <button className="contact__form-submit" type="submit">Submit</button>
            </form>
        </div>
            
        </div>
        </section>
    )
}
