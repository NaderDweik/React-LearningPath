import React, { useState } from "react";

function NewComp() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <input
        placeholder="Comments"
        type="text"
        value={comment}
        onChange={handleCommentChange}
      />
      <p>Comments: {comment}</p>

      <p>Select delivery options</p>
      <select value={delivery} onChange={handleDeliveryChange}>
        <option value="">Select an option</option>
        <option value="Pick up">Pick up from store</option>
        <option value="Delivery to home">Delivery to Home</option>
      </select>

      <p>Delivery: {delivery}</p>
    </div>
  );
}

export default NewComp;
