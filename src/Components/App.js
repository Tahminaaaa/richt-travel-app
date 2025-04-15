import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./Home.js";
import Page2 from "./Activity.js";
import Page3 from "./Continents.js";
import Home from "./Home.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </Router>
    );
}

export default App;