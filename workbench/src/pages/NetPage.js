import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/Axes/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import FlimsyNetCard from '../JScomponents/Nets/FlimsyNetCard.js'
import NetCard from '../JScomponents/Nets/NetCard.js'
import GoldenNetCard from '../JScomponents/Nets/GoldenNetCard.js'
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
import FlimsyNetCard from '../JScomponents/Nets/FlimsyNet.js';
import NetCard from '../JScomponents/Nets/Net.js';
import GoldenNetCard from '../JScomponents/Nets/GoldenNet.js';
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

function NetPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <div style={{ display: 'inline-flex', textAlign: 'center' }}>
        <FlimsyNetCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <NetCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <GoldenNetCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

      <button style={{ display: 'block', marginLeft: '0', marginLeft: '15px', marginTop: '15px'}} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default NetPage;