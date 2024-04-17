import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const FlimsyWateringCanCard = () => {

    return (
        <div className="FlimsyWateringCanCard">
             <div className="imageFlimsyWateringCan-container">
                 <img src={TOOLS_IMAGES.flimsyWateringCan} alt="FlimsyWateringCan" /> 
             </div>
             <div className="FlimsyWateringCanText-container">
                 <p>FlimsyWateringCan</p>
             </div>
         </div>
    );
};

export default FlimsyWateringCanCard;