function generateHexColor(){
    let hexColor = "#" + Math.floor( Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = hexColor;
    document.getElementById('colorDisplay').textContent  = hexColor;
    
}