var selectMode;
var selectedArea;

var selectButton;
var selectedPixels;

function scissorsTool() {
    selectMode = 0;
    selectedArea = {x:0, y:0, w:100, h:100};
    
    //create a button with id(selectarea)
    select(".options").html("<button id ='selectarea'>Select area</button>");
    selectButton = select("#selectarea");

    
    selectButton.mousePressed(function()
    {
        var scissorsbutton = document.getElementById("selectarea");
        
        //event code will go here
        if(selectMode == 0)
        {
            //remove swatches border when scissors tool is selected
            for(var i = 0; i < colours.length; i++) {
                document.getElementById(colours[i] + "Swatch").style.border = "0";
            }
            
            //reset colour picker to gradient background, thus removing salmon border
            document.getElementById('color-picker').style = `background: linear-gradient(120deg, MediumBlue, red)`;
            
            selectMode += 1
            scissorsbutton.innerHTML = "Cut";
            loadPixels(); //store current frame
        }
        else if(selectMode == 1)
        {
            selectMode += 1;
            scissorsbutton.innerHTML = "End paste";
            
            //refresh the screen
            updatePixels();
            
            //store the pixels
            selectedPixels = get(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
            
            //draw a rect over it
            fill(255);
            noStroke();
            rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
        }
        else if(selectMode == 2)
        {
            selectMode = 0;
            
            //reset fill and stroke colour to black after one selectMode becomes 0 again
            fill(colours[0]);
		    stroke(colours[0]);
            
            //set colour swatches to salmon border
            select(".colourSwatches").style("border", "2px solid salmon");
            
            loadPixels();
            selectedArea = {x:0, y:0, w:100, h:100};
            scissorsbutton.innerHTML = "Select area";
        }
    });
}

function mousePressed()
{
    if(selectMode == 1)
    {
        selectedArea.x = mouseX;
        selectedArea.y = mouseY;
    }
    else if(selectMode == 2)
    {
        //make selected area into an image
        image(selectedPixels, mouseX, mouseY);
    }
}

function mouseDragged()
{
    if(selectMode == 1)
    {
        var w = mouseX - selectedArea.x;
        var h = mouseY - selectedArea.y;

        selectedArea.w = w;
        selectedArea.h = h;
    } 
}