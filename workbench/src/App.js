import logo from './logo.svg';
import './App.css';
import TOOLS_IMAGES from './images.js';
import Header from './JScomponents/header';
import items from './items.js';
import React, { useState } from 'react';
import { CATEGORIES } from './categoriesConfig.js';
import { SUBCATEGORIES } from './categoriesConfig.js';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

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


  return (
    <div className="App">
      <Header />

      {/* Render buttons for categories */}
      <div className="horizontal-buttons"> {/* Added container for horizontal buttons */}
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              className={`button${selectedCategory === category ? '-selected' : ''}`}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Render subcategory buttons if a category is selected */}
        {selectedCategory && (
          <div className="horizontal-buttons"> {/* Added container for horizontal buttons */}
            {Object.values(SUBCATEGORIES[selectedCategory]).map((subcategory) => (
              <button
                key={subcategory}
                className={`button${selectedSubcategory === subcategory ? '-selected' : ''}`}
                onClick={() => handleSelectSubcategory(subcategory)}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

        {/* Render filtered items */}
        <div className="class-container"> 
          {filteredItems.map((c) => (
            <div key={c.id} className="row">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="class-course">{c.item}</p>
                <img src={c.image} alt="" style={{ marginLeft: '10px' }} />
                <p className='class-description'>{c.materials}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
