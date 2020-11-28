import React from "react";

const Projects = () => {
    return(
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <p className="lead mb-5">Here's a look at what I have been doing lately.</p>
                <div class="row mt-3">
                    <div class="col-sm-3 d-flex justify-content-center mb-3">
                        <div class="card p-20" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Xpen's</h5>
                                <p class="card-text">A simple web application to calculate your expenses.</p>
                                <a href="https://xpens.netlify.app/" class="btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex justify-content-center mb-3">
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Do It Now!</h5>
                                <p class="card-text">A simple web application to manage your tasks.</p>
                                <a href="https://do-it-now.netlify.app/" class="btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex justify-content-center mb-3">
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Random Quote Generator</h5>
                                <p class="card-text">A simple web application to generate random quotes.</p>
                                <a href="https://quote-gen-random.netlify.app/" class="btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 d-flex justify-content-center mb-3">
                        <div class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Rapid Tip</h5>
                                <p class="card-text">A simple web application to calculate tips and to split bill.</p>
                                <a href="https://rapid-tip.netlify.app/" class="btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;