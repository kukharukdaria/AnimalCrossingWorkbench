import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './shovelCard.css';

const GoldenShovelCard = () => {

    return (
        <div className="shovelCard">
             <div className="imageShovel-container">
                 <img src={TOOLS_IMAGES.goldenShovel} alt="GoldenShovel" /> 
             </div>
             <div className="shovelText-container">
                 <p>Golden shovel</p>
             </div>
         </div>
    );
};

export default GoldenShovelCard;