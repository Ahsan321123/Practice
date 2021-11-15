// import logo from './logo.svg';
import './App.css';
import React from "react";
import { FormControl,Select,MenuItem } from '@mui/material';
import { useState ,useEffect} from 'react';
function App() {

   const [countries, setCountries] = useState(['USA',"UK","Pakistan"])

  useEffect(() => {
  
  const getCountriesData= async()=>{
    await fetch("https:/disease.sh/v3/covid-19/countries")
    .then((response)=>response.json())
    .then((data)=>{const data= data.map((country))=>{
      {
        name:country=country.country,
        value:country.countryinfo.iso2

      }
    }

    }
  }
  }, [])




  return (
  <div className="App">
      
      <div className="app_header">
        <h1>
          Covid App
        </h1>
        <FormControl className='app_dropdown' >
          <Select variant='outlined' value='abc' >
            

            {countries.map((country)=>(
              <MenuItem value={country} >{country}</MenuItem>
            ))}
          </Select>

        </FormControl>
      </div>




    </div>
  );
}

export default App;
