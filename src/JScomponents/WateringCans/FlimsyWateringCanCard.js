import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './wateringCanCard.css';

const FlimsyWateringCanCard = () => {

    return (
        <div className="wateringCanCard">
             <div className="imageWateringCan-container">
                 <img src={TOOLS_IMAGES.flimsyWateringCan} alt="FlimsyWateringCan" /> 
             </div>
             <div className="wateringCanText-container">
                 <p>Flimsy watering can</p>
             </div>
         </div>
    );
};

export default FlimsyWateringCanCard;