import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const ShovelCard = () => {

    return (
        <div className="shovelCard">
             <div className="imageShovel-container">
                 <img src={TOOLS_IMAGES.shovel} alt="Shovel" /> 
             </div>
             <div className="shovelText-container">
                 <p>Shovel</p>
             </div>
         </div>
    );
};

export default ShovelCard;