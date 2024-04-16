import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const GoldenFishingRodCard = () => {

    return (
        <div className="goldenFishingRodCard">
             <div className="imageGoldenFishingRod-container">
                 <img src={TOOLS_IMAGES.goldenFishingRod} alt="GoldenFishingRod" /> 
             </div>
             <div className="goldenFishingRodText-container">
                 <p>GoldenFishingRod</p>
             </div>
         </div>
    );
};

export default GoldenFishingRodCard;