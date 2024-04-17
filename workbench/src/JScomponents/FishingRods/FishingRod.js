import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const FishingRodCard = () => {

    return (
        <div className="fishingRodCard">
             <div className="imageFishingRod-container">
                 <img src={TOOLS_IMAGES.fishingRod} alt="FishingRod" /> 
             </div>
             <div className="fishingRodText-container">
                 <p>FishingRod</p>
             </div>
         </div>
    );
};

export default FishingRodCard;