import React from 'react';
import TOOLS_IMAGES from '../images.js';
import '../pages/Pages.css';

const GoldenAxeCard = () => {

    return (
        <div className="card">
             <div className="image-container">
                 <img src={TOOLS_IMAGES.goldenAxe} alt="GoldenAxe" /> 
             </div>
             <div className="text-container">
                 <p>Golden axe</p>
             </div>
         </div>
    );
};

export default GoldenAxeCard;