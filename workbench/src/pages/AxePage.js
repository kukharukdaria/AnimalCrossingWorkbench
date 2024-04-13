import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/FlimsyAxeCard.js';
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';

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
        <img src={ARROWS.right} alt="Axe" /> 
      </div>


      <button onClick={() => {
            navigate("/AnimalCrossingWorkbench/");
          }}>back</button>

    </div>
  );
}

export default AxePage;