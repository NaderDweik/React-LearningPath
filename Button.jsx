function Button (){



    const handleclick = (e) => {
        e.target.textContent = "Clicked";
        console.log("Clicked")
        e.target.style.backgroundColor = "green";
    ;
  }

    return (<button onClick = { (e) => handleclick(e)}> Click me </button>);

}

export default Button;
