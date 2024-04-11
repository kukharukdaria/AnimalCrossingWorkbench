import logo from './logo.svg';
import './App.css';
import TOOLS_IMAGES from './images.js';
import Header from './JScomponents/header';
import items from './items.js';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CATEGORIES } from './categoriesConfig.js';
import { SUBCATEGORIES } from './categoriesConfig.js';
import {MainSlingshotCard, MainAxeCard, MainShovelCard, MainFishingRodCard, MainNetCard, MainWateringCanCard} from './JScomponents/mainCard.js';
import AxePage from './pages/AxePage.js';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false); // New state to track button click

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredItems = items.filter((c) => {
    const categoryMatch = (!selectedCategory || c.category === selectedCategory);
    const subcategoryMatch = (!selectedSubcategory || c.subcategory === selectedSubcategory);

  
    return categoryMatch && subcategoryMatch;
  });

  const handleButtonClick = () => {
    setButtonClicked(true); // Toggle the state when any button is clicked
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="grid-container">
            <MainAxeCard />
            <MainShovelCard />
            <MainFishingRodCard />
            <MainNetCard />
            <MainWateringCanCard />
            <MainSlingshotCard />
        </div>
        
        {/* Render buttons for categories
        <div className="horizontal-buttons">
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              className={`button${selectedCategory === category ? '-selected' : ''}${buttonClicked ? ' clicked' : ''}`}
              onClick={() => {
                handleSelectCategory(category);
                handleButtonClick(); // Call handleButtonClick when any button is clicked
              }}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Render subcategory buttons if a category is selected */}
        {/* {selectedCategory && (
          <div className="horizontal-buttons">
            {Object.values(SUBCATEGORIES[selectedCategory]).map((subcategory) => (
              <button
                key={subcategory}
                className={`button${selectedSubcategory === subcategory ? '-selected' : ''}${buttonClicked ? ' clicked' : ''}`}
                onClick={() => {
                  handleSelectSubcategory(subcategory);
                  handleButtonClick(); // Call handleButtonClick when any button is clicked
                }}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )} */}





          {/* <div className="table-container"> */}
                {/*Header row*/}
                {/* <div className="row-header"style={{ display: 'flex', alignItems: 'left' }}>
                  
                    <p className="table-label-item" style={{ textAlign: 'left' }}>Item</p>
                    <p className="table-label-image">Image</p>
                    <p className="table-label-materials">Materials</p>
                  
                </div> */}

                {/* Render filtered items */}
                {/* <div className="class-container"> 
                  {filteredItems.map((c) => (
                    <div key={c.id} className="row">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className="cell">{c.item}</p>
                        <img className="cell" src={c.image} alt="" style={{ marginLeft: '10px' }} />
                        <div className="cell">
                          <ul className="materials-list">
                            {c.materials.map((material, index) => (
                              <li key={index}>{material}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
