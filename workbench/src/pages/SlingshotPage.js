import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/Axes/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import SlingshotCard from '../JScomponents/Slingshots/SlingshotCard.js'
import GoldenSlingshotCard from '../JScomponents/Slingshots/GoldenSlingshotCard.js'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Switch,
// } from "react-router-dom";

<<<<<<< Updated upstream
//flimsy
//regular
//golden
=======
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

>>>>>>> Stashed changes
function SlingshotPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
<<<<<<< Updated upstream
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <SlingshotCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <GoldenSlingshotCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
=======
      <button style={buttonStyle} onClick={() => {
>>>>>>> Stashed changes
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default SlingshotPage;