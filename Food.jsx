function Food() {
  const food = [
    { name: "Pizza", price: 10 },
    { name: "Burger", price: 5 },
    { name: "Pasta", price: 8 },
    { name: "Salad", price: 6 },
    { name: "Sushi", price: 12 },
  ];

  const Yummy = "Yummy";
  const Delicious = "Delicious";

  return (
    <ul>
      {food.map((item) => (
        <li key={item.name}>
          {item.name} - ${item.price}
        </li>
      ))}
      <li>Apple</li>
      <li>{Delicious}</li>
    </ul>
  );
}

export default Food;
