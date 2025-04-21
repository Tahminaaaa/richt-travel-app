import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import backImg from "../Photos/richtapp-backbutton.png"
import continentsData from "./ContinentsData";

function Continents() {
    const navigate = useNavigate()
    const [selectedContinentId, setSelectedContinentId] = useState(null);


    const handleContinentSelect = (continentId) => {
        console.log("Chosen continent ID:", continentId);
        setSelectedContinentId(continentId);
        localStorage.setItem("selectedContinent", JSON.stringify(continentId));
    };
    useEffect(() => {
        const savedContinent = localStorage.getItem("selectedContinent");
        if (savedContinent) {
            setSelectedContinentId(JSON.parse(savedContinent));
        }
    }, []);

    const row1 = continentsData.slice(0, 3);
    const row2 = continentsData.slice(3, 6);
    return (
        <div className="relative h-screen bg-gradient-to-t from-blue-500 to-purple-500 px-4 overflow-y-auto">
            <div
                onClick={() => navigate("/activity")}
                className="absolute top-4 left-4 z-10 cursor-pointer w-10 h-10 hover:scale-110 transition-transform"
            >
                <img src={backImg} alt="back" />
            </div>
            <div className="pt-8 flex justify-center">
                <Logo />
            </div>

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-8">
                <p className="text-yellow-200 text-2xl font-serif mb-6 text-center">
                    Where do you want to travel?
                </p>


                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
                    {row1.map((continent) => (
                        <div
                            key={continent.id}
                            onClick={() => handleContinentSelect(continent.id)}

                            className={`cursor-pointer border-2 ${selectedContinentId === continent.id
                                ? "border-yellow-400 scale-105 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500"
                                : "border-transparent hover:border-white"
                                } w-32 h-30 rounded-lg overflow-hidden bg-center bg-cover hover:scale-110 transition-all duration-200 ease-in-out shadow-md`} // Added rounded corners, overflow hidden, shadow, transition timing
                        >
                            <img
                                src={continent.image}
                                alt={continent.alt}
                                className="w-full h-full object-cover"
                            />

                        </div>
                    ))}
                </div>


                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {row2.map((continent) => (
                        <div
                            key={continent.id}
                            onClick={() => handleContinentSelect(continent.id)}
                            className={`cursor-pointer border-2 ${selectedContinentId === continent.id
                                ? "border-yellow-400 scale-105 ring-2 ring-yellow-300 ring-offset-2 ring-offset-purple-500"
                                : "border-transparent hover:border-white"
                                } w-32 h-30 rounded-lg overflow-hidden bg-center bg-cover hover:scale-110 transition-all duration-200 ease-in-out shadow-md`}
                        >
                            <img
                                src={continent.image}
                                alt={continent.alt}
                                className="w-full h-full object-cover"
                            />

                        </div>
                    ))}
                </div>


                {selectedContinentId && (
                    <button
                        onClick={() => navigate("/results")}
                        className="mt-8 px-6 py-2 bg-yellow-400 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition-colors"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default Continents;