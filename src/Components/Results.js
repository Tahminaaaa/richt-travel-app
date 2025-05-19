import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import continentsData from "./ContinentsData";

function Results() {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [continent, setContinent] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [country, setCountry] = useState("")

    useEffect(() => {
        const savedActivities = JSON.parse(localStorage.getItem("selectedActivities"));
        const savedContinent = JSON.parse(localStorage.getItem("selectedContinent"));
        const savedDates = JSON.parse(localStorage.getItem("selectedDateRange"));
        const selectedContinent = continentsData.find(
            (c) => c.name.toLowerCase() === savedContinent?.toLowerCase()
        );



        setActivities(savedActivities || []);
        setContinent(savedContinent || "");
        setDateRange(savedDates || [null, null]);
        if (selectedContinent?.countries?.length) {
            const randomIndex = Math.floor(Math.random() * selectedContinent.countries.length);
            setCountry(selectedContinent.countries[randomIndex]);
        }
    }, []);

    return (
        <div className="h-screen bg-gradient-to-t from-blue-500 to-purple-500 text-yellow-200 flex flex-col items-center justify-center p-6">
            <h1 className="text-2xl font-bold mb-4">Your Travel Plan</h1>
            <p><strong>Selected Continent:</strong> {continent}</p>
            <p><strong>Activities:</strong> {activities.join(", ")}</p>
            <p><strong>Date Range:</strong> {dateRange[0] ? new Date(dateRange[0]).toLocaleDateString() : "Not selected"} to {dateRange[1] ? new Date(dateRange[1]).toLocaleDateString() : "Not selected"}</p>
            <p><strong>Suggested Country:</strong> {country}</p>

            <button
                className="mt-6 px-6 py-2 border-2 rounded-lg"
                onClick={() => {
                    localStorage.removeItem("selectedActivities");
                    localStorage.removeItem("selectedContinent");
                    localStorage.removeItem("selectedDateRange");
                    navigate("/")
                }}
            >
                Start Over
            </button>
        </div >
    );
}

export default Results;
