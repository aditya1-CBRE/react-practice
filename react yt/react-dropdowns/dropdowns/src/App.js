import './App.css';
import { useState } from 'react';
import {Country,State,City} from 'country-state-city'

function App() {
  const [countries,setCountries]  = useState(Country.getAllCountries())
  const [states,setStates]  = useState([])
  const [cities,setCities]  = useState([])
  const [selectedCountry,setSelectedCountry] = useState('')
  const [selectedState,setSelectedState] = useState('')
  return (
    <div className="container">
      <div className="row">
        <div className='col'>
          <select className='form-select'>
            <option value=''>Select Country</option>
            {countries.map((country)=>(
              <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className='col'>
        <select disabled className='form-select'>
            <option value=''>Select State</option>
          </select>
        </div>
        <div className='col'>
        <select disabled className='form-select'>
            <option value=''>Select City</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
