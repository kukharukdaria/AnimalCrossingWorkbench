import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './fishingRodCard.css';

const FlimsyFishingRodCard = () => {

    return (
        <div className="fishingRodCard">
             <div className="imageFishingRod-container">
                 <img src={TOOLS_IMAGES.flimsyFishingRod} alt="FlimsyFishingRod" /> 
             </div>
             <div className="fishingRodText-container">
                 <p>Flimsy fishing rod</p>
             </div>
         </div>
    );
};

export default FlimsyFishingRodCard;