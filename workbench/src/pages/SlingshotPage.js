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

function SlingshotPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <button style={buttonStyle} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default SlingshotPage;