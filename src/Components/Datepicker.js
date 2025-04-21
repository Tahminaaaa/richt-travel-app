import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { saveToStorage } from "../Utils/storage";

function MyDatePicker({ selectedDateRange, setSelectedDateRange }) {

    const [startDate, endDate] = selectedDateRange;

    const handleChange = (update) => {
        setSelectedDateRange(update);
        saveToStorage("selectedDateRange", update);
    }
    return (
        <DatePicker
            selectsRange
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            className="p-2 border-2 border-yellow-200 rounded-lg w-64 text-center bg-yellow-100 text-gray-800"
            placeholderText="Select date range"
            dateFormat="dd/MM/yyyy"
        // popperClassName="!w-80 !bg-white !shadow-lg !border-2 !border-gray-300 !rounded-lg"
        />
    );
}

export default MyDatePicker;
