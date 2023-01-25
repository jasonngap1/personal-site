import React from "react";
import Header from "./Header/index";
import Footer from "./Footer/index";
import About from "./About/index";
import Intro from "./Intro/index";
import WorkExperiences from "./Work-Experiences/index";

function App() {
    return (
        <div>
            <Header/>
            <About />
            <Intro />
            <WorkExperiences />
            <Footer/>
        </div>
    );
}

export default App