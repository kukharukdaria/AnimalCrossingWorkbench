import React from 'react';
import './Pages.css';
import AxePage from './AxePage.js';
import Header from '../JScomponents/header';
import {MainSlingshotCard, MainAxeCard, MainShovelCard, MainFishingRodCard, MainNetCard, MainWateringCanCard} from '../JScomponents/mainCard.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Switch,
// } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App-Home">
      <Header />

      <div style={{ display: 'flex',  justifyContent: 'center'}}>
        
        <div className="grid-container" style={{width:'1300px'}}>
            <div className="mainCard" onClick={() => {
              navigate("/AnimalCrossingWorkbench/axe");
            }}>
              <MainAxeCard/>
            </div>

            <div className="mainCard" onClick={() => {
              navigate("/AnimalCrossingWorkbench/shovel");
            }}>
              <MainShovelCard />
            </div>

            <div className="mainCard" onClick={() => {
              navigate("/AnimalCrossingWorkbench/fishingRod");
            }}>
              <MainFishingRodCard />
            </div>

            <div className="mainCard" style={{marginTop: '70px'}} onClick={() => {
              navigate("/AnimalCrossingWorkbench/net");
            }}>
              <MainNetCard />
            </div>

            <div className="mainCard" style={{marginTop: '70px'}} onClick={() => {
              navigate("/AnimalCrossingWorkbench/wateringCan");
            }}>
              <MainWateringCanCard />
            </div>

            <div className="mainCard" style={{marginTop: '70px'}} onClick={() => {
              navigate("/AnimalCrossingWorkbench/slingshot");
            }}>
              <MainSlingshotCard />
            </div>
        </div>
      
      </div>
    </div>
  );
}

export default Home;