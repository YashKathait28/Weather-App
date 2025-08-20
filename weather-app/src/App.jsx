import './App.css';
import React from 'react';
import { Search, MapPin, Wind} from "react-feather";

function App(){
  return (
    <div className='app'>
       <h1>Weather app</h1>
       <div className='input-wrapper'>
        <input type="text" />
        <button>
          <search></search>
        </button>
       </div>

       <div className="content">
        <div className="location">
          <MapPin></MapPin>
          <h2>London <span>(GB)</span></h2>
        </div>
          <p className='datatext'>2nd October 2025</p>

        <div className="weatherdesc">
          <img src="" alt="" />
          <h3>Clear Sky</h3>
        </div>

        <div className="tempstats d-flex flex-c">
          <h1>43 <span>&deg;C</span></h1>
          <h3>Feels Like 44 <span>&deg;C</span></h3>
        </div>

        <div className="windstats">
          <wind></wind>
          <h3>Wind is 20 knots in 45&deg;</h3>
        </div>

       </div>

       <div className="content">
        <h4>No Data Found!</h4>
       </div>
    </div>
  )
};

export default App;