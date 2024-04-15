import React from 'react';
import TOOLS_IMAGES from '../images.js';
import '../pages/Pages.css';

const FlimsyAxeCard = () => {

    return (
        <div className="card">
             <div className="image-container">
                 <img src={TOOLS_IMAGES.flimsyAxe} alt="FlimsyAxe" /> 
             </div>
             <div className="text-container">
                 <p>Flimsy axe</p>
             </div>
         </div>
    );
};

export default FlimsyAxeCard;