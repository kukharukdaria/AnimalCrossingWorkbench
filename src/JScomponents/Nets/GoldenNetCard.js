import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './netCard.css';

const GoldenNetCard = () => {

    return (
        <div className="netCard">
             <div className="imageNet-container">
                 <img src={TOOLS_IMAGES.goldenNet} alt="GoldenNet" /> 
             </div>
             <div className="netText-container">
                 <p>Golden net</p>
             </div>
         </div>
    );
};

export default GoldenNetCard;