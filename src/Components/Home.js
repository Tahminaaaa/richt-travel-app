import React from "react";
import Logo from "./Logo";
import MyDatePicker from "./Datepicker";
import { useNavigate } from "react-router-dom"


function Home() {

  const navigate = useNavigate()
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gradient-to-t from-blue-500 to-purple-500">
      <Logo />
      <h3 className="text-yellow-200 pb-8 font-serif text-2xl">When do you want to travel?</h3>
      <MyDatePicker />
      <button className="border-2 mt-8 rounded-lg w-24 h-19 text-yellow-200"
        onClick={() => navigate("/page2")}>Next</button>
    </div>
  )
}

export default Home;