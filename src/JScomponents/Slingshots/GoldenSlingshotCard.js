import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './slingshotCard.css';

const GoldenSlingshotCard = () => {

    return (
        <div className="slingshotCard">
             <div className="imageSlingshot-container">
                 <img src={TOOLS_IMAGES.goldenSlingshot} alt="goldenSlingshot" /> 
             </div>
             <div className="slingshotText-container">
                 <p>Golden slingshot</p>
             </div>
         </div>
    );
};

export default GoldenSlingshotCard;