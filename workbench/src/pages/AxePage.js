import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
import StoneAxeCard from '../JScomponents/StoneAxeCard.js';
import GoldenAxeCard from '../JScomponents/GoldenAxeCard.js';
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
      <div style={{ display: 'inline-block', textAlign: 'center' }}>
        <FlimsyAxeCard/>
      </div>
      <div>
        <img src={ARROWS.left} />
        <img src={ARROWS.right}/> 
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StoneAxeCard/>
        <GoldenAxeCard/>
      </div>
      <div>
        <img src={ARROWS.down} />
        <img src={ARROWS.down}/> 
      </div>


      <button onClick={() => {
            navigate("/AnimalCrossingWorkbench/");
          }}>back</button>

    </div>
  );
}

export default AxePage;