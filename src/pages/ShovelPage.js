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

function ShovelPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <button style={{ display: 'block', marginLeft: '0', marginLeft: '15px', marginTop: '15px'}} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>
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
