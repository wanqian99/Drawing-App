function eraserTool(){
	this.icon = "assets/eraser.png";
	this.name = "Eraser";

    //to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
        strokeWeight(strokeWidth);
        
        //remove salmon border when eraser tool is selected
        for(var i = 0; i < colours.length; i++) {
            document.getElementById(colours[i] + "Swatch").style.border = null;   
        }

        //reset colour picker to gradiant background, thus removing salmon border
        colorInput.style = `background: linear-gradient(120deg, MediumBlue, red)`;
        
		//if the mouse is pressed
		if(mouseIsPressed && inCanvas) {
            
            //check if they previousX and Y are -1. set them to the current
            //mouse X and Y if they are.
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            //if we already have values for previousX and Y we can draw a line from 
            //there to the current mouse location
            else {
                noFill();
                stroke(255);
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            
            loadPixels();
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else {
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
    //when the tool is deselected update the pixels to just show the drawing and clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
        //reset colour to black by default when eraserTool is unselected
        noFill();
        selectedColour = "black";
        stroke(selectedColour);
        //set salmon border for black swatch
        select(".colourSwatches").style("border", "2px solid salmon");
	};
    
    //adds a button and click handler to the options area.
    //When clicked scissorsTool function runs, allowing cut and paste
    //widthTool allows adjusting of strokeWeight with the slider
	this.populateOptions = function() {
		selectarea = new scissorsTool();
        strokeSize = new widthTool();
	};
}