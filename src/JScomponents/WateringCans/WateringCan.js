import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const WateringCanCard = () => {

    return (
        <div className="WateringCanCard">
             <div className="imageWateringCan-container">
                 <img src={TOOLS_IMAGES.wateringCan} alt="WateringCan" /> 
             </div>
             <div className="WateringCanText-container">
                 <p>WateringCan</p>
             </div>
         </div>
    );
};

export default WateringCanCard;