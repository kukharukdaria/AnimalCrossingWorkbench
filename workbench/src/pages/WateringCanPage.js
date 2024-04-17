import React from 'react';
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
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
=======
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
>>>>>>> 64f7ea0772a5860da84604129bbb691e780f2a23

function WateringCanPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
<<<<<<< HEAD
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

=======
      <button style={{ display: 'block', marginLeft: '0', marginLeft: '15px', marginTop: '15px'}} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>


>>>>>>> 64f7ea0772a5860da84604129bbb691e780f2a23
    </div>
  );
}

export default WateringCanPage;