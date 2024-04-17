import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const GoldenShovelCard = () => {

    return (
        <div className="goldenShovelCard">
             <div className="imageGoldenShovel-container">
                 <img src={TOOLS_IMAGES.goldenShovel} alt="GoldenShovel" /> 
             </div>
             <div className="goldenShovelText-container">
                 <p>GoldenShovel</p>
             </div>
         </div>
    );
};

export default GoldenShovelCard;