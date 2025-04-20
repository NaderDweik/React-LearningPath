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

  // 🧠 styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f0fdfa',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, sans-serif'
    },
    title: {
      textAlign: 'center',
      color: '#006269',
      marginBottom: '20px'
    },
    foodList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '20px'
    },
    foodItem: {
      padding: '10px 15px',
      margin: '5px 0',
      backgroundColor: '#e6fffa',
      border: '1px solid #b2f5ea',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.2s ease'
    },
    inputGroup: {
      display: 'flex',
      gap: '10px'
    },
    input: {
      flex: 1,
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '6px'
    },
    button: {
      backgroundColor: '#006269',
      color: 'white',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🥗 List of Food</h2>
      <ul style={styles.foodList}>
        {foods.map((food, index) => (
          <li
            key={index}
            style={styles.foodItem}
            onClick={() => handleRemoveFood(index)}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#c4f1f9')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#e6fffa')}
          >
            {food} ❌
          </li>
        ))}
      </ul>
      <div style={styles.inputGroup}>
        <input id="foodInput" type="text" placeholder="Enter food name" style={styles.input} />
        <button onClick={handleAddFood} style={styles.button}>Add Food</button>
      </div>
    </div>
  );
}

export default MyComponent1;
