
import './App.css';
import Header from './JScomponents/header';
import items from './items.js';
import React, { useState } from 'react';
import AxePage from './pages/AxePage.js';
<<<<<<< Updated upstream
import ShovelPage from './pages/ShovelPage.js'
=======
import NetPage from './pages/NetPage.js';
import ShovelPage from './pages/ShovelPage.js';
import WateringCanPage from './pages/WateringCanPage.js';
import FishingRodPage from './pages/FishingRodPage.js';
import SlingshotPage from './pages/SlingshotPage.js';
>>>>>>> Stashed changes
import Home from './pages/Home.js';
import {MainSlingshotCard, MainAxeCard, MainShovelCard, MainFishingRodCard, MainNetCard, MainWateringCanCard} from './JScomponents/mainCard.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
import FishingRodPage from './pages/FishingRodPage.js';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AnimalCrossingWorkbench/" element={<Home />} />

          <Route path="/AnimalCrossingWorkbench/axe" element={<AxePage />} />
<<<<<<< Updated upstream
          <Route path="/AnimalCrossingWorkbench/net" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/fishingRod" element={<FishingRodPage />} />
          <Route path="/AnimalCrossingWorkbench/wateringCan" element={<AxePage />} />
          <Route path="/AnimalCrossingWorkbench/shovel" element={<ShovelPage />} />
          <Route path="/AnimalCrossingWorkbench/slingshot" element={<AxePage />} />
=======
          <Route path="/AnimalCrossingWorkbench/net" element={<NetPage />} />
          <Route path="/AnimalCrossingWorkbench/fishingrod" element={<FishingRodPage />} />
          <Route path="/AnimalCrossingWorkbench/wateringcan" element={<WateringCanPage />} />
          <Route path="/AnimalCrossingWorkbench/shovel" element={<ShovelPage />} />
          <Route path="/AnimalCrossingWorkbench/slingshot" element={<SlingshotPage />} />
>>>>>>> Stashed changes
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