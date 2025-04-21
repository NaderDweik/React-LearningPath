import React from 'react';
import { useState } from 'react';


function MyComponent(){

const[cars, setCars] =  useState([]);
const [carYear, setCarYear] = useState(new Date().getFullYear());
const[carMake, setCarMake] =  useState("");
const[carModel, setCarModel] =  useState("");

function handleAddCars() {
  const newCar = {year: carYear, carMake: carMake, carModel: carModel};

  setCars([...cars, newCar]);
  setCarYear(new Date().getFullYear());
  setCarMake("");
  setCarModel("");
}



function handleDeleteCars(index) {

  setCars(cars => cars.filter((_, i) => i !== index));



}


function handleYearChange(event) {
  setCarYear (event.target.value);

}


function handleMakeChange(event) {
  setCarMake(event.target.value);
}


function handleModelChange(event) {
  setCarModel(event.target.value);
}



return(
<div>


<h2>
  List of Car Object
</h2>

<ul>
{cars.map ((car, index) => 

<li key={index} onClick={ () =>handleDeleteCars(index)}>

  {car.year} - {car.carMake} - {car.carModel} <br />

</li>

)}

</ul>


<input type= "Number" value={carYear} onChange={handleYearChange} /> <br />
<input type= "text" value={carMake} onChange={handleMakeChange} placeholder=' Enter Car Make' /> <br />

<input type= "text" value={carModel} onChange={handleModelChange} placeholder=' Enter Car Model' /> <br />

<button onClick={handleAddCars}> Add car</button>


</div>



)
}


export default MyComponent;