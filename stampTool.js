var stampSizeSlider;
var nStampSlider;
var stamplist = null;

function stampTool(){
	this.icon = "assets/stamp.png";
	this.name = "Stamp";
    
    //-1 is null
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    var stampSize;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                for(var i = 0; i < nStampSlider.value(); i++)
                {
                    stampSize = stampSizeSlider.value();
                    
                    //if slider value is 1, dont spread the stars
                    //else spread the stars
                    if(nStampSlider.value() == 1) {
                        imageMode(CENTER);
                        var stampX = mouseX;
                        var stampY = mouseY;
                    }
                    else {
                        imageMode(CORNER);
                        var stampX = random((mouseX - stampSize/2)-stampSize*2, (mouseX - stampSize/2)+stampSize*2);
                        var stampY = random((mouseY - stampSize/2)-stampSize*2, (mouseY - stampSize/2)+stampSize*2);
                    }
                    
                    if(stamp == "Star") {
                        image(starStamp, stampX, stampY, stampSize, stampSize);
                    }
                    else if (stamp == "Moon") {
                        image(moonStamp, stampX, stampY, stampSize, stampSize);
                    }
                    else if (stamp == "Sun") {
                        image(sunStamp, stampX, stampY, stampSize, stampSize);
                    }
                    else if (stamp == "Cloud") {
                        image(cloudStamp, stampX, stampY, stampSize, stampSize);
                    }
                    else if (stamp == "Tree") {
                        image(treeStamp, stampX, stampY, stampSize, stampSize);
                    }
                    else if (stamp == "Rabbit") {
                        image(rabbitStamp, stampX, stampY, stampSize, stampSize);
                    }
                }
                drawing = true;
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
		//try and comment out these lines and see what happens!
		else if(drawing){
            loadPixels();
            drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    
    //when the tool is deselected update the pixels to just show the drawing and also clear options
    this.unselectTool = function()
    {
        updatePixels();
        //clear options
        select(".options").html("");
    };
    
    //adds a button and click handler to the options area.
    //When clicked toggle between fill and no fill
    this.populateOptions = function()
    {
        selectarea = new scissorsTool();
        starAdjust = new stampAdjustTool();
        stamplist = new stampsList();
    };
}