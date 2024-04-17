import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const FlimsyNetCard = () => {

    return (
        <div className="flimsyNetCard">
             <div className="imageFlimsyNet-container">
                 <img src={TOOLS_IMAGES.flimsyNet} alt="FlimsyNet" /> 
             </div>
             <div className="flimsyNetText-container">
                 <p>FlimsyNet</p>
             </div>
         </div>
    );
};

export default FlimsyNetCard;