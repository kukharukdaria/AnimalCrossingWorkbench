import React from 'react';
import { useNavigate } from "react-router-dom";
import ARROWS from '../images.js';
import TOOLS_IMAGES from '../images.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";

function WateringCanPage() {
  const navigate = useNavigate();


  return (
    <div style={{
      align: 'center'
    }}>
      <button style={{ display: 'block', marginLeft: '0', marginLeft: '15px', marginTop: '15px'}} onClick={() => {
        navigate("/AnimalCrossingWorkbench/");
      }}>back</button>


    </div>
  );
}

export default WateringCanPage;