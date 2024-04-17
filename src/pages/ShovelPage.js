import React from 'react';
import { useNavigate } from "react-router-dom";
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import FlimsyShovelCard from '../JScomponents/Shovels/FlimsyShovelCard.js'
import GoldenShovelCard from '../JScomponents/Shovels/GoldenShovelCard.js'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Switch,
// } from "react-router-dom";

const buttonStyle = {
  padding: '15px 32px',
  textAlign: 'center',
  border: 'none', /* Border color */
  backgroundColor: '#F3A556', /* Background color */
  fontSize: '20px', /* Size of the arrow */
  color: '#246651', /* Arrow color */
  cursor: 'pointer',
  outline: 'none', /* Remove default button outline */
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'block',
  marginLeft: '15px',
  marginTop: '15px'
}

const arrowStyle = {
  display: 'block',
  textAlign: 'center',
  lineHeight: '50px' /* Center the arrow vertically */

}

function ShovelPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <button style={buttonStyle} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>Back</button>
      <div style={{ display: 'inline-flex', textAlign: 'center', marginLeft: '100px' }}>
        <FlimsyShovelCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '100px', height: '200px', marginLeft: '0px', marginTop: '20px', marginBottom: '20px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center', marginLeft: '100px' }}>
        <GoldenShovelCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}


    </div>
  );
}

export default ShovelPage;


//flimsy shovel
//golden shovel
