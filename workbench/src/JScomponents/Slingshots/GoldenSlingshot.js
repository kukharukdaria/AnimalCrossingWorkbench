import React from 'react';
import TOOLS_IMAGES from '../../images.js';
import '../Axes/axeCard.css';

const SlingshotCard = () => {

    return (
        <div className="goldenSlingshotCard">
             <div className="imageSlingshot-container">
                 <img src={TOOLS_IMAGES.goldenSlingshot} alt="Slingshot" /> 
             </div>
             <div className="goldenSlingshotText-container">
                 <p>Slingshot</p>
             </div>
         </div>
    );
};

export default SlingshotCard;