var symmetryReflect = null; 

function kaleidoscopeTool(){
	//set an icon and a name for the object
	this.icon = "assets/kaleidoscope.png";
	this.name = "kaleidoscope";
    
	this.draw = function(){
        strokeWeight(strokeWidth);
        translate(canvasContainer.size().width / 2, canvasContainer.size().height / 2);
        
		//if the mouse is pressed
		if(mouseIsPressed && inCanvas) {
            
            var mx = mouseX - canvasContainer.size().width / 2;
            var my = mouseY - canvasContainer.size().height / 2;
            var pmx = pmouseX - canvasContainer.size().width / 2;
            var pmy = pmouseY - canvasContainer.size().height / 2;
            
            if(selectMode == 0) {
                //if color picker is not selected, use Swatchcol as stroke color
                //else use Pickercol as stroke color
                if(colorInput.style.border == "") {
                    stroke(Swatchcol);
                }
                else {
                    stroke(Pickercol);
                }

                //make the lines symmetric
                for (var i = 0; i < symmetry; i++) {
                    var angle = 360 / symmetry;
                    angleMode(DEGREES);
                    rotate(angle);
                    line(mx, my, pmx, pmy);
                    push();
                    scale(1, -1);
                    line(mx, my, pmx, pmy);
                    pop();
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
        symmetryReflect = new scopeSymmetry();
	};
}