var backgroundimg = null;
var filter = null;
var thresholdParameter = null;
var posterizeParameter = null;
var blurParameter = null;
var alphaval = null;

function uploadTool() {
    //set an icon and a name for the object
	this.icon = "assets/imgupload.png";
	this.name = "uploadimg";
    
    //-1 is null
    var startMouseX = -1;
	var startMouseY = -1;
    var drawing = false;
    
    this.draw = function() {
        //if imgfilter doesnt require parameters, hide the sliders
        //else, show the relevant sliders
        if(imgfilter == "opaque" || 
           imgfilter == "gray" || 
           imgfilter == "invert" || 
           imgfilter == "erode" ||
           imgfilter == "dilate") {
            param = null;
            thresholdparaminput.style.visibility = 'hidden';
            posterizeparaminput.style.visibility = 'hidden';
            blurparaminput.style.visibility = 'hidden';
        }
        else if (imgfilter == "threshold") {
            param = thresholdparam;
            thresholdparaminput.style.visibility = 'visible';
            posterizeparaminput.style.visibility = 'hidden';
            blurparaminput.style.visibility = 'hidden';
        }
        else if (imgfilter == "posterize") {
            param = posterizeparam;
            thresholdparaminput.style.visibility = 'hidden';
            posterizeparaminput.style.visibility = 'visible';
            blurparaminput.style.visibility = 'hidden';
        }
        else if (imgfilter == "blur") {
            param = blurparam;
            thresholdparaminput.style.visibility = 'hidden';
            posterizeparaminput.style.visibility = 'hidden';
            blurparaminput.style.visibility = 'visible';
        }
        
        if(mouseIsPressed && inCanvas) {
            if(selectMode == 0) {
                if (img) {
                    if(startMouseX == -1) {
                        startMouseX = mouseX;
                        startMouseY = mouseY;
                        drawing = true;
                        loadPixels();
                    }

                    //updatePixels 'updates' the new image to the pixels array
                    else {
                        updatePixels();
                        rotate(rotatetool);
                        angleMode(DEGREES);
                        
                        //if rotatetool is not 0, make the rotate origin at the center of the image
                        if(rotatetool !== 0) {
                            imageMode(CENTER);
                        }
                        else {
                            imageMode(CORNER);
                        }
                        
                        //if backgroundimage is true, scale the image size to the canvas size
                        //saves img pixels first, and update img pixels after image is drawn on the canvas
                        //to prevent stacking of filters
                        if(backgroundstatus == true) {
                            //if rotatetool is not 0, translate to the center of the canvas
                            if(rotatetool !== 0) {
                                translate(canvasContainer.size().width/2, canvasContainer.size().height/2);
                            }

                            img.loadPixels();
                            tint(255, alpha);
                            img.filter(imgfilter, param);
                            image(img, 0, 0, canvasContainer.size().width, canvasContainer.size().height);
                            img.updatePixels();
                        }
                        
                        //if backgroundstatus is false: if shift key is pressed, scale image proportionally
                        //else scale image according to imgWidth and imgHeight
                        //saves img pixels first, and update img pixels after image is drawn on the canvas
                        //to prevent stacking of filters
                        if(backgroundstatus == false) {
                            var imgWidth = mouseX - startMouseX;
                            var imgHeight = mouseY - startMouseY;
                            translate(startMouseX, startMouseY);
                            
                            if(keyIsPressed == true && keyCode == '16') {
                                //calculate ratio of img height and width
                                var ratio = img.height/ img.width;
                                //multiply imgHeight by ratio to scale image proportionally
                                img.loadPixels();
                                tint(255, alpha);
                                img.filter(imgfilter, param);
                                image(img, 0, 0, imgWidth, ratio * imgWidth);
                                img.updatePixels();
                            }
                            else {
                                img.loadPixels();
                                tint(255, alpha);
                                img.filter(imgfilter, param);
                                image(img, 0, 0, imgWidth, imgHeight);
                                img.updatePixels();
                            }
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
        else if(drawing){
            loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
    }
    
    //when the tool is deselected update the pixels to just show the drawing and clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
        img = null;
	};

	//adds a button and click handler to the options area.
    //When clicked uploadFile function runs, allowing cut and paste
	this.populateOptions = function() {
        selectarea = new scissorsTool();
        uploadimg = new uploadFile();
        rotating = new rotateTool();
        alphavalue = new alphaVal();
        filter = new imgFilter();
        thresholdParameter = new thresholdParam();
        posterizeParameter = new posterizeParam();
        backgroundimg = new backgroundImage();
        blurParameter = new blurParam();
        
	};
}
