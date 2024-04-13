import React from 'react';
import { useNavigate } from "react-router-dom";
import FlimsyAxeCard from '../JScomponents/FlimsyAxeCard.js'

function AxePage() {
  const navigate = useNavigate();
  return (
    <div style={{
      align: 'center'
    }}>
      <div style={{ display: 'inline-block', textAlign: 'center' }}> {/* Center align the FlimsyAxeCard */}
        <FlimsyAxeCard/>
      </div>
      <h1>Axes are sharp</h1>
      <button onClick={() => {
            navigate("/AnimalCrossingWorkbench/");
          }}>back</button>

    </div>
  );
}

export default AxePage;