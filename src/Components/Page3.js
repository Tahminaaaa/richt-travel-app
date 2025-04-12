import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import backImg from "../Photos/richtapp-backbutton.png"
import africaImg from "../Photos/richtapp-africa.png"
import asiaImg from "../Photos/richtapp-asia.png"
import australiaImg from "../Photos/richtapp-australia.png"
import europeImg from "../Photos/richtapp-europe.png"
import namericaImg from "../Photos/richtapp-namerica.png"
import samericaImg from "../Photos/richtapp-samerica.png"

function Page3() {
    const navigate = useNavigate()

    return (
        <div className="relative h-screen bg-gradient-to-t from-blue-500 to-purple-500 px-4">
            <div
                onClick={() => navigate("/page2")}
                className="absolute top-4 left-4 cursor-pointer w-10 h-10 hover:scale-110 transition-transform"
            >
                <img src={backImg} alt="back" />
            </div>
            <div className="pt-8 flex justify-center">
                <Logo />
            </div>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] gap-4">
                <p className="text-yellow-200 text-2xl font-serif mb-4">Where do you want to travel?</p>

                <div className="continent1 flex space-x-6 mt-4">
                    <div
                        onClick={() => console.log("Chosen")}
                        className="africa cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={africaImg} alt="africa" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="asia cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={asiaImg} alt="asia" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="australia cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={australiaImg} alt="australia" />
                    </div>
                </div>
                <div className="continent2 flex space-x-6 mt-4">
                    <div
                        onClick={() => console.log("Chosen")}
                        className="europe cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={europeImg} alt="europe" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="namerica cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={namericaImg} alt="namerica" />
                    </div>
                    <div
                        onClick={() => console.log("Chosen")}
                        className="samerica cursor-pointer border-2 w-32 h-30 bg-center bg-cover hover:scale-110 transition-transform">
                        <img src={samericaImg} alt="samerica" />
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Page3