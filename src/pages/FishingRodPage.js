//flimsy fishing rod
//fishing rod

import React from 'react';
import { useNavigate } from "react-router-dom";
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import FlimsyFishingRodCard from '../JScomponents/FishingRods/FlimsyFishingRodCard.js'
import FishingRodCard from '../JScomponents/FishingRods/FishingRodCard.js'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Switch,
// } from "react-router-dom";

function FishingRodPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <div style={{ display: 'inline-flex', textAlign: 'center' }}>
        <FlimsyFishingRodCard />
      </div>
      <div>
      <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <FishingRodCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default FishingRodPage;