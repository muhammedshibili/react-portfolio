import React from "react";
import "./About.css";
import aboutImg from "./img/IMG-0139.jpg";

function About() {

  window.addEventListener("scroll", function(){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                A committed, goal oriented and smart working person who is
                currently a Bachelor Degree holder in COMPUTER APPLICATION and
                is looking forward for a challenging career in future where I
                can completely utilize my skills and abilities in IT and related
                fields.
              </p>
              <p className="about__text p__color">
                What is an “about me” section in a resume? An “about me” section
                is a brief segment in your resume that highlights who you are as
                a professional, describes your greatest strengths and showcases
                your greatest professional accomplishmentsWhat is an “about me”
                section in a resume? An “about me” section is a brief segment in
                your resume that highlights who you are as a professional,
                describes your greatest strengths and showcases your greatest
                professional accomplishmentsWhat is an “about me” section in a
                resume? An “about me” section is a brief segment in your resume
                that highlights who you are as a professional, describes your
                greatest strengths and showcases your greatest professional
                accomplishments
              </p>
              <p className="about__text p__color">
                What is an “about me” section in a resume? An “about me” section
                is a brief segment in your resume that highlights who you are as
                a professional, describes your greatest strengths and showcases
                your greatest professional accomplishmentsWhat is an “about me”
                section in a resume? An “about me” section is a brief segment in
                your resume that highlights who you are as a professional,
                describes your greatest strengths and showcases your greatest
                professional accomplishmentsWhat is an “about me” section in a
                resume? An “about me” section is a brief segment in your resume
                that highlights who you are as a professional, describes your
                greatest strengths and showcases your greatest professional
                accomplishments
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
