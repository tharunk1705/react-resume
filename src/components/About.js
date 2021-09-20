import React from "react";

const About = () => {
    return (
        <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-5">
                       Tharun
                        <span className="text-primary"> Kumar</span>
                    </h1>
                    <div className="lead mb-5">
                        <ul>
                            <li> I am a Full Stack Developer with a Bachelors degree in Computer Science and Engineering from Jerusalem college of Engineering, Chennai.</li>
                            <li> My interests lie in developing responsive and interactive web applications.</li>
                            <li> Currently - Programmer Analyst Trainee at Cognizant</li>
                        </ul>
                    </div>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/tharunk1705" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/tharunk1705" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://twitter.com/tharunk1705" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="mailto:tharunk1705@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope"></i></a>
                    </div>
                </div>
        </section>
    );
}

export default About;