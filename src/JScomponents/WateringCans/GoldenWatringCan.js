import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const GoldenWateringCanCard = () => {

    return (
        <div className="GoldenWateringCanCard">
             <div className="imageGoldenWateringCan-container">
                 <img src={TOOLS_IMAGES.goldenGoldenWateringCan} alt="GoldenWateringCan" /> 
             </div>
             <div className="GoldenWateringCanText-container">
                 <p>GoldenWateringCan</p>
             </div>
         </div>
    );
};

export default GoldenWateringCanCard;