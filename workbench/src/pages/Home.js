import React from 'react';
import './Pages.css';
import AxePage from './AxePage.js';
import Header from '../JScomponents/header';
import {MainSlingshotCard, MainAxeCard, MainShovelCard, MainFishingRodCard, MainNetCard, MainWateringCanCard} from '../JScomponents/mainCard.js';

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App-Home">
      <div>THIS IS HOME</div>
      <Header />

      <div className="grid-container">
          <div className="MainAxeCard" onClick={() => {
            navigate("/AnimalCrossingWorkbench/axe");
          }}>
            <MainAxeCard/>
          </div>
          <MainShovelCard />
          <MainFishingRodCard />
          <MainNetCard />
          <MainWateringCanCard />
          <MainSlingshotCard />
      </div>
      
    </div>
  );
}

export default Home;