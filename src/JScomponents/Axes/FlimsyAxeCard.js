import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './axeCard.css';

const FlimsyAxeCard = () => {

    return (
        <div className="axeCard">
             <div className="imageAxe-container">
                 <img src={TOOLS_IMAGES.flimsyAxe} alt="FlimsyAxe" /> 
             </div>
             <div className="axeText-container">
                 <p>Flimsy axe</p>
             </div>
         </div>
    );
};

export default FlimsyAxeCard;