import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/Axes/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import StoneAxeCard from '../JScomponents/Axes/StoneAxeCard.js';
import AxeCard from '../JScomponents/Axes/AxeCard.js';
import GoldenAxeCard from '../JScomponents/Axes/GoldenAxeCard.js';

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

function AxePage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <button style={buttonStyle} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>Back</button>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px', marginLeft: '0px'}}>
        <FlimsyAxeCard style={{align: 'center'}} />
      </div>
      <div style={{marginTop: '40px', marginBottom: '40px'}} >
        <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
          <img src={ARROWS.left} style={{ width: '175px', height: '175px', marginRight: '30px', marginLeft: '0px' }} />
        </div>
        <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
          <img src={ARROWS.right} style={{ width: '175px', height: '175px', marginLeft: '30px' }} />
        </div>
        
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <div style={{marginRight: '150px'}}>
          <StoneAxeCard/>
        </div>
        <div style={{marginLeft: '150px'}}>
          <AxeCard/>
        </div>
        
      </div>
      <div style={{marginTop: '20px', marginBottom: '20px'}}>
        {/* <img src={ARROWS.down} style={{ width: '150px', height: '150px', marginRight: '300px' }} /> */}
        <img src={ARROWS.down} style={{ width: '100px', height: '200px', marginLeft: '500px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center', marginLeft: '500px', marginBottom: '100px' }}>
        <GoldenAxeCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}



    </div>
  );
}

export default AxePage;