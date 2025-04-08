import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            className="p-2 border-2 border-yellow-200 rounded-lg w-64 text-center bg-yellow-100 text-gray-800"
            placeholderText="Select date range"
            dateFormat="dd/MM/yyyy"
        // popperClassName="!w-80 !bg-white !shadow-lg !border-2 !border-gray-300 !rounded-lg"
        />
    );
}

export default MyDatePicker;
