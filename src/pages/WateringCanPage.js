import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/Axes/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import FlimsyWateringCanCard from '../JScomponents/WateringCans/FlimsyWateringCanCard.js'
import WateringCanCard from '../JScomponents/WateringCans/WateringCanCard.js'
import GoldenWateringCanCard from '../JScomponents/WateringCans/GoldenWateringCanCard.js'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Switch,
// } from "react-router-dom";

//flimsy
//regular
//golden
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";

const buttonStyle = {
  padding: '15px 32px',
  textAlign: 'center',
  border: 'none', /* Border color */
  backgroundColor: '#04AA6D', /* Background color */
  fontSize: '16px', /* Size of the arrow */
  color: 'white', /* Arrow color */
  cursor: 'pointer',
  outline: 'none', /* Remove default button outline */
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'block',
  marginLeft: '15px',
  marginTop: '15px'
}

function WateringCanPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <div style={{ display: 'inline-flex', textAlign: 'center' }}>
        <FlimsyWateringCanCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <WateringCanCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <GoldenWateringCanCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

      <button style={buttonStyle} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default WateringCanPage;