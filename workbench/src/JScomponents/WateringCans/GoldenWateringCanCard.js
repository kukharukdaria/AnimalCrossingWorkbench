import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './wateringCanCard.css';

const GoldenWateringCanCard = () => {

    return (
        <div className="wateringCanCard">
             <div className="imageWateringCan-container">
                 <img src={TOOLS_IMAGES.goldenWateringCan} alt="GoldenWateringCan" /> 
             </div>
             <div className="wateringCanText-container">
                 <p>Golden watering can</p>
             </div>
         </div>
    );
};

export default GoldenWateringCanCard;