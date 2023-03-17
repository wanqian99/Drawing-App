var side = null;
var shapeslist = null;

function shapeTool(){
	this.icon = "assets/shapes.png";
	this.name = "shape";

    //-1 is null
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
	this.draw = function() {
        strokeWeight(strokeWidth);
        
        //if shape is rectangle or ellipse, hide side slider
        //else if shape is polygon, show side slider
        if(shape == "Rectangle") {
            inputsides.style.visibility = 'hidden';
        }
        else if (shape == "Ellipse") {
            inputsides.style.visibility = 'hidden';
        }
        else if (shape == "Polygon") {
            inputsides.style.visibility = 'visible';
        }
        
        //if fillstatus is true
        //if color picker is not selected, use Swatchcol as fill color
        //else use Pickercol as fill color
        
        //if fillstatus is false
        //if color picker is not selected, use Swatchcol as stroke color
        //else use Pickercol as stroke color
        if(fillstatus) {
            noStroke();
            if(colorInput.style.border == "") {
                fill(Swatchcol);
            }
            else {
                fill(Pickercol);
            }
        }
        else {
            noFill();
            if(colorInput.style.border == "") {
                stroke(Swatchcol);
            }
            else {
                stroke(Pickercol);
            }
        }

        //when mouse is pressed, and after ellipse is drawn, loadPixels 'saves' the current pixels
		if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                if(startMouseX == -1){
                    startMouseX = mouseX;
                    startMouseY = mouseY;
                    drawing = true;
                    loadPixels();
                }

                //updatePixels 'updates' the new ellipse to the pixels array
                else{
                    updatePixels();
                    translate(startMouseX, startMouseY);
                    rotate(rotatetool);
                    
                    if(shape == "Rectangle") {
                        angleMode(DEGREES);
                        var rectWidth = mouseX - startMouseX;
                        var rectHeight = mouseY - startMouseY;
                        //if rotatetool is not 0, make the rotate origin at the center of the rectangle
                        if(rotatetool !== 0) {
                            rectMode(CENTER);
                        }

                        //is shift is pressed, draw square
                        //else draw rectangle
                        if(keyIsPressed == true && keyCode == '16'){
                            rect(0, 0, rectWidth, rectWidth);
                        } else {
                            rect(0, 0, rectWidth, rectHeight);
                        }
                    }
                    else if (shape == "Ellipse") {
                        angleMode(DEGREES);
                        var ellipseWidth = (mouseX - startMouseX) * 2;
                        var ellipseHeight = (mouseY - startMouseY) * 2;
                        //if rotatetool is not 0, make the rotate origin at the center of the ellipse
                        if(rotatetool !== 0) {
                            ellipseMode(CENTER);
                        }

                        //is shift is pressed, draw circle
                        //else draw ellipse
                        if(keyIsPressed == true && keyCode == '16'){
                            ellipse(0, 0, ellipseWidth, ellipseWidth);
                        } else {
                            ellipse(0, 0, ellipseWidth, ellipseHeight);
                        }
                    }
                    else if (shape == "Polygon") {
                        angleMode(RADIANS);
                        var polygonWidth = (mouseX - startMouseX) * 2;
                        var polygonHeight = (mouseY - startMouseY) * 2;
                        
                        //is shift is pressed, draw proportioned polygon
                        //else draw unproportioned polygon
                        if(keyIsPressed == true && keyCode == '16'){
                            polygon(0, 0, polygonWidth, polygonWidth, sides);
                        } else {
                            polygon(0, 0, polygonWidth, polygonHeight, sides);
                        }
                    }
                }
            }
            else if(selectMode == 1)
            {
                updatePixels();

                noStroke();
                fill(255,0,0,100);
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            }
		}

        //resets drawing state after drawing an ellipse
		else if(drawing){
            loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
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
        rotating = new rotateTool();
        alphavalue = new alphaVal();
        
        shapeslist = new shapesList();
        side = new polygonSides(); 
	};
}

//function for drawing polygon
function polygon(x, y, radiusx, radiusy, sides) {
    angleMode(RADIANS);
    let angle = TWO_PI / sides;
    beginShape();
    for (let i = 0; i < TWO_PI; i += angle) {
    let sx = x + cos(i) * radiusx;
    let sy = y + sin(i) * radiusy;
    vertex(sx, sy);
    }
    endShape(CLOSE);
}
