import React from "react";

const Projects = () => {
    return(
        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                <p className="lead mb-5">Here's a look at what I have been doing lately.</p>
                <div className="row mt-3">
                <div className="col-sm-3 d-flex justify-content-center mb-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Kwando!</h5>
                                <p className="card-text">A simple webpage to display our college symposium events.</p>
                                <a href="https://kwando.netlify.app/" target="_blank" rel="noreferrer" className="project-btn btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center mb-3">
                        <div className="card p-20" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Weather App</h5>
                                <p className="card-text">A simple web application to display the current weather.</p>
                                <a href="https://willitrain.netlify.app/" target="_blank" rel="noreferrer" className="project-btn btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center mb-3">
                        <div className="card p-20" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Todos Today</h5>
                                <p className="card-text">A simple web application made with angular to create/manage todos.</p>
                                <a href="https://todostoday.vercel.app/" target="_blank" rel="noreferrer" className="project-btn btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center mb-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Rapid Tip</h5>
                                <p className="card-text">A simple web application to calculate tips and to split bill.</p>
                                <a href="https://rapid-tip.netlify.app/" target="_blank" rel="noreferrer" className="project-btn btn btn-primary">Visit Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;