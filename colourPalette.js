//a list of web colour strings
var colours = ["black", "silver", "gray", "white", "maroon", "red", 
               "purple", "orange", "pink", "fuchsia", "green", "lime", 
               "olive", "yellow", "navy", "blue", "teal", "aqua"];

var selectedColour;

//Displays and handles the colour palette.
function ColourPalette() {
	//make the start colour be black
    selectedColour = "black";

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];
        
		//set the selected colour for stroke
		selectedColour = c;

		//add a new border to the selected colour
		this.style("border", "2px solid salmon");
        
        //reset colour picker to gradiant background, thus removing salmon border
        colorInput.style = gradient;
	}

	//load in the colours
	this.loadColours = function() {
		//set the stroke to be black at the start of the programme
		//running
        noFill();
		stroke(colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < colours.length; i++) {
			var colourID = colours[i] + "Swatch";

			//using p5.dom add the swatch to the palette and 
            //set its background colour to be the colour value.
			var colourSwatch = createDiv();
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);
			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", colours[i]);
			colourSwatch.mouseClicked(colourClick);
            
		}

        //set black swatch border to salmon by default
		select(".colourSwatches").style("border", "2px solid salmon");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}