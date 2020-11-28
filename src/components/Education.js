import React from "react";

const Education = () => {
    return(
        <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Jerusalem College of Engineering</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Computer Science and Engineering</div>
                            <p>CGPA: 7.5</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2017 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">St. Joseph's Higher Secondary School</h3>
                            <div className="subheading mb-3">XII</div>
                            <p>67.6 %</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2015 - 2017</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Don Bosco MAtriculation School</h3>
                            <div className="subheading mb-3">X</div>
                            <p>96.2 %</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2014 - 2015</span></div>
                    </div>
                </div>
        </section>
    );
}

export default Education;