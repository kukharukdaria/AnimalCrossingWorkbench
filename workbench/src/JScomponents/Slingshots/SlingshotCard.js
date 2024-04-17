import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const SlingshotCard = () => {

    return (
        <div className="slingshotCard">
             <div className="imageSlingshot-container">
                 <img src={TOOLS_IMAGES.slingshot} alt="Slingshot" /> 
             </div>
             <div className="slingshotText-container">
                 <p>Slingshot</p>
             </div>
         </div>
    );
};

export default SlingshotCard;