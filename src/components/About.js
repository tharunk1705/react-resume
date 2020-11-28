import React from "react";

const About = () => {
    return (
        <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-5">
                       Tharun
                        <span className="text-primary"> Kumar</span>
                    </h1>
                    <p className="lead mb-5">
                        <ul>
                            <li> Highly focused engineering graduate seeking an entry-level job in an organisation where I can improve my skills and also contribute to the growth of the organisation.</li>
                            <li> Having experience being part of a Magazine designing team for my college Silver Jubilee I have learnt how to engage with people and collaborate on a crucial project.</li>
                            <li> Proficient in developing JavaScript and React based Web Applications.</li>
                        </ul>
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="www.linkedin.com/in/tharunk1705"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/tharunk1705"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://github.com/tharunk1705"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="mailto:tharunk1705@gmail.com"><i class="far fa-envelope"></i></a>
                    </div>
                </div>
        </section>
    );
}

export default About;