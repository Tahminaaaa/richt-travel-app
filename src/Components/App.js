import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Activity from "./Activity.js";
import Continents from "./Continents.js";
import Results from "./Results.js";



function App() {
    useEffect(() => {

        localStorage.removeItem("selectedActivities");
        localStorage.removeItem("selectedContinent");
        localStorage.removeItem("selectedDateRange");
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/continents" element={<Continents />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default App;