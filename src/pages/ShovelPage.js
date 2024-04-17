import React from 'react';
import { useNavigate } from "react-router-dom";
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';
<<<<<<< Updated upstream
import FlimsyShovelCard from '../JScomponents/Shovels/FlimsyShovelCard.js'
import GoldenShovelCard from '../JScomponents/Shovels/GoldenShovelCard.js'
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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

=======
      <button style={{ display: 'block', marginLeft: '0', marginLeft: '15px', marginTop: '15px'}} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>




>>>>>>> Stashed changes
    </div>
  );
}

<<<<<<< Updated upstream
export default ShovelPage;


//flimsy shovel
//golden shovel
=======
export default ShovelPage;
>>>>>>> Stashed changes
