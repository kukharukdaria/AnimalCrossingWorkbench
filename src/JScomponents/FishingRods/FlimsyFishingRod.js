import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const FlimsyFishingRodCard = () => {

    return (
        <div className="flimsyFishingRodCard">
             <div className="imageFlimsyFishingRod-container">
                 <img src={TOOLS_IMAGES.flimsyFishingRod} alt="FlimsyFishingRod" /> 
             </div>
             <div className="flimsyFishingRodText-container">
                 <p>FlimsyFishingRod</p>
             </div>
         </div>
    );
};

export default FlimsyFishingRodCard;