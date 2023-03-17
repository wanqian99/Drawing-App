var patternbtn = null;
var randomcolor = null;

function patternTool(){
	//set an icon and a name for the object
	this.icon = "assets/pattern.png";
	this.name = "pattern";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;
    
	this.draw = function(){
        strokeWeight(strokeWidth);
        
		//if the mouse is pressed
		if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                //check if they previousX and Y are -1. set them to the current
                //mouse X and Y if they are.
                if (previousMouseX == -1) {
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                //if we already have values for previousX and Y we can draw a line from 
                //there to the current mouse location
                else {
                    //new variable called randomCol that allows random colors and adjustable opacity
                    var randomCol = color(random(0,255), random(0,255),random(0,255));
                    randomCol.setAlpha(alpha);
                    
                    
                    //if fillstatus is true
                    //if random status is true, use randomCol as fill color
                    //else, if color picker is not selected, use Swatchcol as fill color
                    //else use Pickercol as fill color

                    //if fillstatus is false
                    //if random status is true, use randomCol as stroke color
                    //else, if color picker is not selected, use Swatchcol as stroke color
                    //else use Pickercol as stroke color
                    
                    if(fillstatus) {
                        noStroke();
                        if(randomstatus == true) {
                            fill(randomCol);
                        }
                        else {
                            if(colorInput.style.border == "") {
                                fill(Swatchcol);
                            }
                            else {
                                fill(Pickercol);
                            }
                        }
                    }
                    else {
                        noFill();
                        if(randomstatus == true) {
                            stroke(randomCol);
                        }
                        else {
                            if(colorInput.style.border == "") {
                                stroke(Swatchcol);
                            }
                            else {
                                stroke(Pickercol);
                            }
                        }
                    }
                    
                    //run pattern function according to the patternMode
                    if(patternMode == "Ellipse") {
                        speedEllipse(previousMouseX, previousMouseY, mouseX, mouseY);
                    }
                    else if(patternMode == "Rectangle") {
                        speedRect(previousMouseX, previousMouseY, mouseX, mouseY);
                    }
                    else if(patternMode == "Triangle") {
                        speedTriangle(previousMouseX, previousMouseY, mouseX, mouseY);
                    }
                    
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
                loadPixels();
            }
            else if(selectMode == 1) {
                updatePixels();

                noStroke();
                fill(255,0,0,100);
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            }
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
    //when the tool is deselected update the pixels to just show the drawing and clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};

	//adds a button and click handler to the options area.
    //When clicked scissorsTool function runs, allowing cut and paste
    //widthTool allows adjusting of strokeWeight with the slider
	this.populateOptions = function() {
		selectarea = new scissorsTool();
        strokeSize = new widthTool();
        alphavalue = new alphaVal();
        patternbtn = new patternBtn();
        randomcolor = new randomCol();
	};
}