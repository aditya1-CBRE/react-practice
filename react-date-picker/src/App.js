import React from 'react';
// import Calender from './Components/Calender';
// import 'react-calendar/dist/Calendar.css'; // Ensure you import the CSS for the Calendar component
import './App.css';
import ExampleDatePicker from './Components/ExampleDatePicker';

function App() {
  return (
    <div className="App">
      {/* <Calendar /> */}
      <ExampleDatePicker/>
      {/* <Calender/> */}
    </div>
  );
}

export default App;
