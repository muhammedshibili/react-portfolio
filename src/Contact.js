import React from 'react';
import './Contact.css';
import contactImg from "./img/IMG-0136.JPG";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
            <div className="contact__box">
                <div className="contact_meta">
                    <h1 className="hire__text">Hire Me.</h1>
                    <p className="hire__text white">Connect with me via phone:</p>
                    <p className="hire__text white"><strong>0581474086</strong> or email <strong>shibilipk10@gmail.com</strong></p>
                </div>
                <div className="input__box">
                    <input type="text" className="contact name" placeholder="your name *" />
                    <input type="text" className="contact email" placeholder="your email *" />
                    <input type="text" className="contact subject" placeholder="write a subject" />
                    <textarea name="message" id="message" placeholder="write your message   "></textarea>
                    <button className="btn contact pointer" type="submit">Submit</button>
                </div>
            </div>
        </div>
        <div className="col__2">
            <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  )
}

export default Contact
