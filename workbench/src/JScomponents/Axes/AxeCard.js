import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './axeCard.css';

const AxeCard = () => {

    return (
        <div className="axeCard">
             <div className="imageAxe-container">
                 <img src={TOOLS_IMAGES.axe} alt="Axe" /> 
             </div>
             <div className="axeText-container">
                 <p>Axe</p>
             </div>
         </div>
    );
};

export default AxeCard;