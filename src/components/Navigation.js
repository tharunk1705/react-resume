import React from "react";
import tharun from "../tharun.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Tharun Kumar</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={tharun} alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active-item " href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link active-item" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link active-item" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link active-item" href="#projects">Projects</a></li>
                    {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;