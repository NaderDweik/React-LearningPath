import { useState } from "react";

const Zoo = () => {
  const [animal, setAnimal] = useState("Dog");
  const [bird, setBird] = useState("Eagle");
  const [fish, setFish] = useState("Shark");



  const updateAnimal = () => {
    setAnimal("Cat");
  };

  const updateBird = () => {
    setBird("Sparrow");
  };

  const updateFish = () => {
    setFish("Whale");
  };

  return (
    <div>
      <h1 className="Animal">Animal: {animal}</h1>
      <button onClick={updateAnimal}>Update Animal</button>

      <h1 className="Bird">Bird: {bird}</h1>
      <button onClick={updateBird}>Update Bird</button>

      <h1 className="Fish">Fish: {fish}</h1>
      <button onClick={updateFish}>Update Fish</button>
    </div>
  );
}

export default Zoo;
