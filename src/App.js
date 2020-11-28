import React from "react";
import Navbar from "./components/Navigation";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import './App.css';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  toast.success("For a better experience view on Desktop");

  return(
    <div id="page-top">    
      <Navbar />
      <div className="container-fluid p-0">
        <ToastContainer position="bottom-center" />  
        <About />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Projects />
        <hr class="m-0" />
      </div>
    </div>
  );
}
export default App;
