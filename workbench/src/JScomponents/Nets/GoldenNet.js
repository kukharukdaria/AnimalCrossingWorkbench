import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const GoldenNetCard = () => {

    return (
        <div className="GoldenNetCard">
             <div className="imageGoldenNet-container">
                 <img src={TOOLS_IMAGES.goldenNet} alt="GoldenNet" /> 
             </div>
             <div className="GoldenNetText-container">
                 <p>GoldenNet</p>
             </div>
         </div>
    );
};

export default GoldenNetCard;