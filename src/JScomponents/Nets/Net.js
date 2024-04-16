import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const NetCard = () => {

    return (
        <div className="NetCard">
             <div className="imageNet-container">
                 <img src={TOOLS_IMAGES.net} alt="Net" /> 
             </div>
             <div className="NetText-container">
                 <p>Net</p>
             </div>
         </div>
    );
};

export default NetCard;