import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './netCard.css';

const NetCard = () => {

    return (
        <div className="netCard">
             <div className="imageNet-container">
                 <img src={TOOLS_IMAGES.net} alt="Net" /> 
             </div>
             <div className="netText-container">
                 <p>Net</p>
             </div>
         </div>
    );
};

export default NetCard;