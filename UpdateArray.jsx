import React, { useState } from 'react';

function MyComponent1() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value.trim();
    if (newFood !== "") {
      setFoods(f => [...f, newFood]);
      document.getElementById("foodInput").value = "";
    }
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h2 className="title">🥗 List of Food</h2>
      <ul className="food-list">
        {foods.map((food, index) => (
          <li key={index} className="food-item" onClick={() => handleRemoveFood(index)}>
            {food} ❌
          </li>
        ))}
      </ul>
      <div className="input-group">
        <input id="foodInput" type="text" placeholder="Enter food name" className="food-input" />
        <button onClick={handleAddFood} className="add-button">Add Food</button>
      </div>
    </div>
  );
}

export default MyComponent1;
