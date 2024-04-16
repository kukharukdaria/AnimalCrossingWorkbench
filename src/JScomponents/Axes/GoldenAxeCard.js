import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './axeCard.css';

const GoldenAxeCard = () => {

    return (
        <div className="axeCard">
             <div className="imageAxe-container">
                 <img src={TOOLS_IMAGES.goldenAxe} alt="GoldenAxe" /> 
             </div>
             <div className="axeText-container">
                 <p>Golden axe</p>
             </div>
         </div>
    );
};

export default GoldenAxeCard;