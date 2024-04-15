import React from 'react';
import TOOLS_IMAGES from '../images.js';
import '../pages/Pages.css';

const StoneAxeCard = () => {

    return (
        <div className="card">
             <div className="image-container">
                 <img src={TOOLS_IMAGES.stoneAxe} alt="StoneAxe" /> 
             </div>
             <div className="text-container">
                 <p>Stone axe</p>
             </div>
         </div>
    );
};

export default StoneAxeCard;