import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import beachImg from "../Photos/richtapp-beach.png"
import skiImg from "../Photos/richtapp-ski.png"
import pyramidImg from "../Photos/richtapp-pyramids.png"
import museumImg from "../Photos/richtapp-museum.png"
import backImg from "../Photos/richtapp-backbutton.png"

function Activity() {
    const navigate = useNavigate();
    const [selectedActivities, setSelectedActivities] = useState([]);

    useEffect(() => {
        const storedActivities = localStorage.getItem("selectedActivities");
        if (storedActivities) {
            setSelectedActivities(JSON.parse(storedActivities));
        }
    }, []);

    const handleActivityToggle = (activity) => {
        let updatedActivities;

        if (selectedActivities.includes(activity)) {
            updatedActivities = selectedActivities.filter((item) => item !== activity);
        } else {
            updatedActivities = [...selectedActivities, activity];
        }

        setSelectedActivities(updatedActivities);
        localStorage.setItem("selectedActivities", JSON.stringify(updatedActivities));
    };

    const handleNext = () => {
        if (selectedActivities.length === 0) {
            alert("Please select at least one activity!");
            return;
        }
        navigate("/Continents");
    };



    return (
        <div className="relative h-screen bg-gradient-to-t from-blue-500 to-purple-500 px-4">


            <div
                onClick={() => navigate("/")}
                className="absolute top-4 left-4 cursor-pointer w-10 h-10 hover:scale-110 transition-transform"
            >
                <img src={backImg} alt="back" />
            </div>

            <div className="pt-8 flex justify-center">
                <Logo />
            </div>

            <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] gap-4">
                <p className="text-yellow-200 text-2xl font-serif mb-4">
                    What do you want to see in your holiday?
                </p>

                <div className="choice flex space-x-6 mt-4">
                    <div
                        onClick={() => handleActivityToggle("beach")}
                        className={`cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform
                        ${selectedActivities.includes("beach")
                                ? "border-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500 scale-105"
                                : "border-transparent hover:border-white"
                            }`}
                    >
                        <img src={beachImg} alt="beach" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => handleActivityToggle("ski")}
                        className={`cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform
                        ${selectedActivities.includes("ski")
                                ? "border-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500 scale-105"
                                : "border-transparent hover:border-white"
                            }`}
                    >
                        <img src={skiImg} alt="ski" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => handleActivityToggle("pyramid")}
                        className={`cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform
                        ${selectedActivities.includes("pyramid")
                                ? "border-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500 scale-105"
                                : "border-transparent hover:border-white"
                            }`}
                    >
                        <img src={pyramidImg} alt="pyramid" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => handleActivityToggle("museum")}
                        className={`cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform
                        ${selectedActivities.includes("museum")
                                ? "border-yellow-400 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500 scale-105"
                                : "border-transparent hover:border-white"
                            }`}
                    >
                        <img src={museumImg} alt="museum" className="w-full h-full object-cover" />
                    </div>
                </div>

                <button
                    className="border-2 mt-8 rounded-lg w-24 h-10 text-yellow-200"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Activity;