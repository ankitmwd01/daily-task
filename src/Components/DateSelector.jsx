import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

const DateSelector = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = () => {
    // Pass the selected date to the parent component or a callback function
    onDateSelect(selectedDate);
  };

  return (
    <div>
      <h2>Select Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Customize the date format as needed
        isClearable // Add a clear button to reset the date
        placeholderText="Select a date"
      />
      <button onClick={handleDateSelect}>Select</button>
    </div>
  );
};

export default DateSelector;
