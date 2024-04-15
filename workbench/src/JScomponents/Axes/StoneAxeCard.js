import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './axeCard.css';

const StoneAxeCard = () => {

    return (
        <div className="axeCard">
             <div className="imageAxe-container">
                 <img src={TOOLS_IMAGES.stoneAxe} alt="StoneAxe" /> 
             </div>
             <div className="axeText-container">
                 <p>Stone axe</p>
             </div>
         </div>
    );
};

export default StoneAxeCard;