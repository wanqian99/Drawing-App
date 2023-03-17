// Create a variable for color-picker object 
var colorInput = document.getElementById('color-picker');
// Create variable for gradient
var gradient = `background: linear-gradient(120deg, MediumBlue, red);`

//make the default colour picker background colour to be gradient
colorInput.style = gradient;

//create event handler when the colorInput changes color
//when colour is selected, change the background colour to selected colour value
colorInput.onchange = function() {
    //remove the gradient background
    colorInput.style = null;
    //set border to salmon when color is selected
    colorInput.style.border = "2px solid salmon";
    //display selected color from the color-picker as the backgroundColor
	colorInput.style.backgroundColor = colorInput.value;
    
    //remove salmon border for colour swatch when colour picker is selected
    for(var i = 0; i < colours.length; i++) {
        document.getElementById(colours[i] + "Swatch").style.border = "0";
    }
}

function ColourPicker() {
    //load in the colours
	this.loadColours = function() {
		//set the stroke to be the colourInput value when a colour is selected in the colour picker
        colorInput.addEventListener("input", function() {
            noFill();
		    stroke(colorInput.value);
        })
	};
	//call the loadColours function now it is declared
	this.loadColours();
}