function LineToTool(){
	this.icon = "assets/line.png";
	this.name = "LineTo";

    //-1 is null
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function() {
        strokeWeight(strokeWidth);
        
        //when mouse is pressed, and after line is drawn, loadPixels 'saves' the current pixels
		if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                if(startMouseX == -1){
                    startMouseX = mouseX;
                    startMouseY = mouseY;
                    drawing = true;
                    loadPixels();
                }

                //updatePixels 'updates' the new line to the pixels array
                else {
                    updatePixels();
                    
                    //if color picker is not selected, use Swatchcol as stroke color
                    //else use Pickercol as stroke color
                    if(colorInput.style.border == "") {
                        stroke(Swatchcol);
                    }
                    else {
                        stroke(Pickercol);
                    }
                    
                    line(startMouseX, startMouseY, mouseX, mouseY);
                }
            }
            else if(selectMode == 1) {
                updatePixels();

                noStroke();
                fill(255,0,0,100);
                rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            }
		}

        //resets drawing state after drawing a line
		else if(drawing) {
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
        alphavalue = new alphaVal();
	};
}