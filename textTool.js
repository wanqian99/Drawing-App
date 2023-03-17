var textMode = null;
var textstyling = null;
var textfontfamily = null;
var textangle = null;
var textradius = null;
var textPath = null;

function textTool(){
	this.icon = "assets/text.png";
	this.name = "text";

    //-1 is null
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        strokeWeight(strokeWidth);
        
        //if textpath is none, hide radius and angle slider
        //else if textpath is circle, show radius and angle slider
        if(textpath == "None") {
            inputtextradius.style.visibility = 'hidden';
            inputtextangle.style.visibility = 'hidden';
        }
        else if (textpath == "Circle") {
            inputtextradius.style.visibility = 'visible';
            inputtextangle.style.visibility = 'visible';
        }
        else if (textpath == "Curve") {
            inputtextradius.style.visibility = 'visible';
            inputtextangle.style.visibility = 'hidden';
        }
        
        //when mouse is pressed, and after rect is drawn, loadPixels 'saves' the current pixels
		if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                if(startMouseX == -1) {
                    startMouseX = mouseX;
                    startMouseY = mouseY;
                    drawing = true;
                    loadPixels();
                }

                //updatePixels 'updates' the new rect to the pixels array
                else{
                    updatePixels();
                    
                    //if fillstatus is true
                    //if color picker is not selected, use Swatchcol as fill color
                    //else use Pickercol as fill color

                    //if fillstatus is false
                    //if color picker is not selected, use Swatchcol as stroke color
                    //else use Pickercol as stroke color
                    if(fillstatus){
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
                    
                    textSize(textsize);
                    textStyle(textstyle);
                    textFont(textfont);
                    
                    translate(startMouseX, startMouseY);
                    angleMode(DEGREES);
                    rotate(rotatetool);
                    //if rotatetool is not 0, make the rotate origin at the center of the text
                    if(rotatetool !== 0) {
                        textAlign(CENTER, CENTER);
                    }
                    
                    if(textpath == "None") {
                        text(textinput, 0, 0);
                    }
                    else if (textpath == "Circle") {
                        var angle = textangletool*Math.PI/180; // degrees
                        var radius = textradiustool;
                        textCirclePath(context, textinput, radius, angle);
                    }
                    else if (textpath == "Curve") {
                        var angle = 180*Math.PI/180; // degrees
                        var radius = textradiustool;
                        textCurvePath(context, textinput, radius, angle);
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

        //resets drawing state after drawing the text
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

        textsizing = new textSizing();
        textradius = new TextRadiusTool();
        textangle = new TextAngleTool();
        
        textfontfamily = new textFonts();
        textstyling = new textStyling();
        textPath = new textAlongPath();
        
        textMode = new textInput();
	};
}