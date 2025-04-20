import React, { useState } from 'react';

function Update03() {
  const [car, setCar] = useState({
    make: "Ford",
    model: "Mustang",
    year: 1969,
  });

  const HandleSetMake = event => {
    setCar(c => ({
      ...c,
      make: event.target.value
    }));
  };

  const HandleSetModel = event => {
    setCar(c => ({
      ...c,
      model: event.target.value
    }));
  };

  const HandleSetYear = event => {
    setCar(c => ({
      ...c,
      year: event.target.value
    }));
  };

  return (
    <div>
      <p>Car Model: {car.year} {car.make} {car.model}</p>

      <input
        type="text"
        value={car.make}
        onChange={HandleSetMake}
        placeholder="Make"
      />

      <input
        type="text"
        value={car.model}
        onChange={HandleSetModel}
        placeholder="Model"
      />

      <input
        type="number"
        value={car.year}
        onChange={HandleSetYear}
        placeholder="Year"
      />
    </div>
  );
}

export default Update03;
