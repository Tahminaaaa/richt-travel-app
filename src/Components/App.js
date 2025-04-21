import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Activity from "./Activity.js";
import Continents from "./Continents.js";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/continents" element={<Continents />} />
            </Routes>
        </Router>
    );
}

export default App;