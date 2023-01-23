import React from "react";
import Header from "./Header/index";
import Footer from "./Footer/index";
import About from "./About/index";
import Intro from "./Intro/index";

function App() {
    return (
        <div>
            <Header/>
            <About />
            <Intro />
            <Footer/>
        </div>
    );
}

export default App