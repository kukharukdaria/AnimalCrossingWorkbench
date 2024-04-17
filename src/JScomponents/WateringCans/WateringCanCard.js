import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './wateringCanCard.css';

const WateringCanCard = () => {

    return (
        <div className="wateringCanCard">
             <div className="imageWateringCan-container">
                 <img src={TOOLS_IMAGES.wateringCan} alt="WateringCan" /> 
             </div>
             <div className="wateringCanText-container">
                 <p>Watering can</p>
             </div>
         </div>
    );
};

export default WateringCanCard;