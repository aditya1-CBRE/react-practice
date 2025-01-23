import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      </header>
    </div>
  );
}

export default App;
