import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState, useRef, useEffect } from 'react';


function CalendarNotebook() {

    const [startDate, setStartDate, handleDateSelect, handleDateChange] =
        useState(new Date())

    return(
        <div className="date-picker">
        <DatePicker
          selected={startDate}
          // onSelect={handleDateSelect} //when day is clicked
          // onChange={handleDateChange} //only when value has changed
          onChange={(date) => setStartDate(date)}
        />
      </div>
    )
}

export default CalendarNotebook;