import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isWeekend } from "date-fns";

function ExampleDatePicker() {
  const [Selectdate, setSelectDate] = useState(null);
  const dateHandler = (date) => {
    setSelectDate(date);
  };
  const isWeekendDay = (date) => {
    return isWeekend(date);
  };
  const FilterWeekends = (date) => {
    return !isWeekendDay(date);
  };

  return (
    <div>
      <h1>Select Date</h1>
      <DatePicker
        selected={Selectdate}
        onChange={dateHandler}
        dateFormat="MM/dd/yyyy hh:mm"
        filterDate={FilterWeekends}
        showTimeSelect
        timeIntervals={30}
        timeFormat="HH:mm"
      />
      <h2>Selected Date: {Selectdate ? Selectdate.toString() : 'None'}</h2>
    </div>
  );
}

export default ExampleDatePicker;
