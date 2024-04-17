import React from "react";
import './mainCard.css';
import TOOLS_IMAGES from '../images.js';
import { useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';



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
        <div className="card">
            <div className="imageContainer">
                <image src={TOOLS_IMAGES.slingshot} className="cardImage" alt="Slingshot" />
            </div>
            <div className="text-container">
                <p className="toolName">Slingshot</p>
            </div>
        </div>
        //template(TOOLS_IMAGES.flimsyShovel, "Shovel")
    );
}

// export function MainSlingshotCard() {
//     return (
//         template(TOOLS_IMAGES.slingshot, "Slingshot")
//     );
// }


export function MainShovelCard() {
    return (
        <div className="card">
            <div className="imageContainer">
                <image src={TOOLS_IMAGES.flimsyShovel} className="cardImage" alt="Shovel" />
            </div>
            <div className="text-container">
                <p className="toolName">Shovel</p>
            </div>
        </div>
    );
}

// export function MainShovelCard() {
//     return (
//         template(TOOLS_IMAGES.flimsyShovel, "Shovel")
//     );
// }


export function MainWateringCanCard() {
    return (
        <div className="card">
            <div className="imageContainer">
                <image src={TOOLS_IMAGES.flimsyWateringCan} className="cardImage" alt="Watering Can" />
            </div>
            <div className="text-container">
                <p className="toolName">Watering Can</p>
            </div>
        </div>
    );
}

// export function MainWateringCanCard() {
//     return (
//         template(TOOLS_IMAGES.flimsyWateringCan, "Watering Can")
        
//     );
// }


export function MainNetCard() {
    return (
        <div className="card">
            <div className="imageContainer">
                <image src={TOOLS_IMAGES.flimsyNet} className="cardImage" alt="Net" />
            </div>
            <div className="text-container">
                <p className="toolName">Net</p>
            </div>
        </div>
        //template(TOOLS_IMAGES.flimsyShovel, "Shovel")
    );
}

// export function MainNetCard() {
//     return (
//         template(TOOLS_IMAGES.flimsyNet, "Shovel")
        
//     );
// }


export function MainFishingRodCard() {
    return (
        <div className="card">
            <div className="imageContainer">
                <image src={TOOLS_IMAGES.flimsyFishingRod} className="cardImage" alt="Fishing Rod" />
            </div>
            <div className="text-container">
                <p className="toolName">Fishing Rod</p>
            </div>
        </div>
        //template(TOOLS_IMAGES.flimsyShovel, "Shovel")
    );
}

// export function MainFishingRodCard() {
//     return (
//         template(TOOLS_IMAGES.flimsyFishingRod, "Fishing Rod")
//     );
// }