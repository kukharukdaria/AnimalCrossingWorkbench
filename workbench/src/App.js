
import './App.css';
import Header from './JScomponents/header';
import items from './items.js';
import React, { useState } from 'react';
import AxePage from './pages/AxePage.js';
import Home from './pages/Home.js';
import {MainSlingshotCard, MainAxeCard, MainShovelCard, MainFishingRodCard, MainNetCard, MainWateringCanCard} from './JScomponents/mainCard.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <div>SAY SOMETHING</div>
      <Router>
        <Routes>
          <Route path="/AnimalCrossingWorkbench/" element={<Home />} />

          <Route path="/AnimalCrossingWorkbench/axe" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/net" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/FishingRod" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/WateringCan" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/Shovel" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/Slingshot" element={<AxePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//Axe 
//Net 
//Fishing Rod 
//Watering Can
//Shovel
//Slingshot 