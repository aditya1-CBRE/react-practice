import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender() {
  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem('selectedDate');
    return savedDate ? new Date(savedDate) : null;
  });
  const [previousTimeZone, setPreviousTimeZone] = useState(() => {
    const savedTimeZone = localStorage.getItem('previousTimeZone');
    return savedTimeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  });

  useEffect(() => {
    const savedTimeZone = localStorage.getItem('previousTimeZone');
    if (savedTimeZone) {
      setPreviousTimeZone(savedTimeZone);
    }
  }, []);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSaveDate = () => {
    if (date) {
      localStorage.setItem('selectedDate', date.toISOString());
      localStorage.setItem('previousTimeZone', Intl.DateTimeFormat().resolvedOptions().timeZone);
      alert('Date saved to local storage');
    }
  };

  const minDate = new Date("2024/01/01");
  const maxDate = new Date("2025/01/24");

  const formatDateInTimeZone = (date, timeZone) => {
    return new Date(date.toLocaleString('en-US', { timeZone }));
  };

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        minDate={minDate}
        maxDate={maxDate}
      />
      <button onClick={handleSaveDate}>Save Date</button>
      <h2>Previously Selected Date: {date ? formatDateInTimeZone(date, previousTimeZone).toString() : 'None'}</h2>
      <h2>Time Zone: {previousTimeZone}</h2>
      <h2>Full Date and Time: {date ? formatDateInTimeZone(date, previousTimeZone).toString() : 'None'}</h2>
    </div>
  );
}

export default Calender;
