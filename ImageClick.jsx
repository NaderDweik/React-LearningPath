function ImageClick() {

    const imageURL = './src/assets/react.svg'
    const handleClick = (e) => {e.target.style.display = 'none';}

return (<img src = {imageURL} onClick={handleClick} style={{ cursor: 'pointer' }} />);
}


export default ImageClick;

