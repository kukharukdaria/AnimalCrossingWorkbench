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

function AxePage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <div style={{ display: 'inline-flex', textAlign: 'center' }}>
        <FlimsyAxeCard />
      </div>
      <div>
        <img src={ARROWS.left} style={{ width: '300px', height: '300px', marginRight: '400px', marginLeft: '-75px' }} />
        <img src={ARROWS.right} style={{ width: '300px', height: '300px', marginLeft: '100px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
        <StoneAxeCard />
        <AxeCard />
      </div>
      <div>
        {/* <img src={ARROWS.down} style={{ width: '150px', height: '150px', marginRight: '300px' }} /> */}
        <img src={ARROWS.down} style={{ width: '200px', height: '200px', marginLeft: '750px' }} />
      </div>
      <div style={{ display: 'inline-flex', justifyContent: 'center', marginLeft: '850px' }}>
        <GoldenAxeCard />
      </div>

      <div style={{ width: '100px', alignContent: 'center' }} /> {/* Empty div for spacing */}

      <button onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>

    </div>
  );
}

export default AxePage;