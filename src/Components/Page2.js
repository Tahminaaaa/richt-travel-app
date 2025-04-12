import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import beachImg from "../Photos/richtapp-beach.png"
import skiImg from "../Photos/richtapp-ski.png"
import pyramidImg from "../Photos/richtapp-pyramids.png"
import museumImg from "../Photos/richtapp-museum.png"
import backImg from "../Photos/richtapp-backbutton.png"

function Page2() {
    const navigate = useNavigate();

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
                        onClick={() => console.log("Chosen")}
                        className="beach cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={beachImg} alt="beach" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="ski cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={skiImg} alt="ski" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="pyramid cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={pyramidImg} alt="pyramid" className="w-full h-full object-cover" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="museum cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={museumImg} alt="museum" className="w-full h-full object-cover" />
                    </div>
                </div>

                <button
                    className="border-2 mt-8 rounded-lg w-24 h-10 text-yellow-200"
                    onClick={() => navigate("/page3")}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Page2;