import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import './shovelCard.css';

const FlimsyShovelCard = () => {

    return (
        <div className="shovelCard">
             <div className="imageShovel-container">
                 <img src={TOOLS_IMAGES.flimsyShovel} alt="FlimsyShovel" /> 
             </div>
             <div className="shovelText-container">
                 <p>Flimsy shovel</p>
             </div>
         </div>
    );
};

export default FlimsyShovelCard;