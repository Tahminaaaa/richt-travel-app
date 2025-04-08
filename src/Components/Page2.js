import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";

function Page2() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-blue-500 to-purple-500">
            <Logo />
            <p className="text-yellow-200 text-2xl font-serif mb-4">
                What do you want to see in your holiday?
            </p>
            {/* <input
                type="text"
                className="p-2 border-2 border-yellow-300 rounded-lg w-64 text-center bg-white text-black"
                placeholder="Type your favorite color"
            /> */}
            <button
                className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </div>
    );
}

export default Page2;