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
      <div style={{ display: 'inline-flex', textAlign: 'center' }}>
        <FlimsyShovelCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <GoldenShovelCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default ShovelPage;


//flimsy shovel
//golden shovel
