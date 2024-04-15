import React from "react";
import './mainCard.css';
import TOOLS_IMAGES from '../images.js';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



  


export const MainAxeCard = () => {

    return (
        <div className="card">
             <div className="image-container">
                 <img src={TOOLS_IMAGES.flimsyAxe} className="cardImage" alt="Axe" /> 
             </div>
             <div className="text-container">
                 <p className="toolName">Axe</p>
             </div>
         </div>
    );
};

const template = (i, n) => {
    return(
        <div className="card">
            <div className="image-container">
                <img src={i} className="cardImage"/> 
            </div>
            <div className="text-container">
                <p className="toolName">{n}</p>
            </div>
        </div>
    );
}



export function MainSlingshotCard() {
    return (
        template(TOOLS_IMAGES.slingshot, "Slingshot")
    );
}



export function MainShovelCard() {
    return (
        template(TOOLS_IMAGES.flimsyShovel, "Shovel")
    );
}


export function MainWateringCanCard() {
    return (
        template(TOOLS_IMAGES.flimsyWateringCan, "Watering Can")
        
    );
}

export function MainNetCard() {
    return (
        template(TOOLS_IMAGES.flimsyNet, "Shovel")
        
    );
}

export function MainFishingRodCard() {
    return (
        template(TOOLS_IMAGES.flimsyFishingRod, "Fishing Rod")
    );
}