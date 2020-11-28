import React from "react";

const Education = () => {
    return(
        <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Jerusalem College of Engineering</h3>
                            <div class="subheading mb-3">Bachelor of Engineering</div>
                            <div>Computer Science and Engineering</div>
                            <p>CGPA: 7.5</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2017 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">St. Joseph's Higher Secondary School</h3>
                            <div class="subheading mb-3">XII</div>
                            <p>67.6 %</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2015 - 2017</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Don Bosco MAtriculation School</h3>
                            <div class="subheading mb-3">X</div>
                            <p>96.2 %</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2014 - 2015</span></div>
                    </div>
                </div>
        </section>
    );
}

export default Education;