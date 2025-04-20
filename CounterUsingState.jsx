import React, { useState } from 'react';
function UseState(){

const [name, setName] = useState(0);


return (
    <div className='container'>
        <h1 className='heading'>{name}</h1>
        <div className='btn-container'>

        <button className = "increase"onClick={() => setName(name + 1)}>Increase</button>
        <button className = "decrease" onClick={() => setName(name - 1)}>Decrease</button>
        <button className = "reset"onClick={() => setName(0)}>Reset</button>


        </div>

    </div>
)
}


export default UseState;
