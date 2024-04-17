import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './netCard.css';

const FlimsyNetCard = () => {

    return (
        <div className="netCard">
             <div className="imageNet-container">
                 <img src={TOOLS_IMAGES.flimsyNet} alt="FlimsyNet" /> 
             </div>
             <div className="netText-container">
                 <p>Flimsy net</p>
             </div>
         </div>
    );
};

export default FlimsyNetCard;