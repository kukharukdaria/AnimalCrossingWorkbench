import React from "react";
import './mainCard.css';
import TOOLS_IMAGES from '../images.js';
import { useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';



export function MainSlingshotCard() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={TOOLS_IMAGES.slingshot} alt="Axe" /> 
            </div>
            <div className="text-container">
                <p>Slingshot</p>
            </div>
        </div>
    );
}



export const MainAxeCard = () => {

    return (
        <div className="card">
             <div className="image-container">
                 <img src={TOOLS_IMAGES.flimsyAxe} alt="Axe" /> 
             </div>
             <div className="text-container">
                 <p>Axe</p>
             </div>
         </div>
    );
};
  



export function MainShovelCard() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={TOOLS_IMAGES.flimsyShovel} alt="Axe" /> 
            </div>
            <div className="text-container">
                <p>Shovel</p>
            </div>
        </div>
    );
}


export function MainWateringCanCard() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={TOOLS_IMAGES.flimsyWateringCan} alt="Axe" /> 
            </div>
            <div className="text-container">
                <p>Watering Can</p>
            </div>
        </div>
    );
}

export function MainNetCard() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={TOOLS_IMAGES.flimsyNet} alt="Axe" /> 
            </div>
            <div className="text-container">
                <p>Shovel</p>
            </div>
        </div>
    );
}

export function MainFishingRodCard() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={TOOLS_IMAGES.flimsyFishingRod} alt="Axe" /> 
            </div>
            <div className="text-container">
                <p>Fishing Rod</p>
            </div>
        </div>
    );
}