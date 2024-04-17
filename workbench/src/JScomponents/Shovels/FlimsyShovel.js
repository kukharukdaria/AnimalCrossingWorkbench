import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const FlimsyShovelCard = () => {

    return (
        <div className="flimsyShovelCard">
             <div className="imageFlimsyShovel-container">
                 <img src={TOOLS_IMAGES.flimsyShovel} alt="FlimsyShovel" /> 
             </div>
             <div className="flimsyShovelText-container">
                 <p>FlimsyShovel</p>
             </div>
         </div>
    );
};

export default FlimsyShovelCard;