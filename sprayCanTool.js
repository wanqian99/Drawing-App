//spray can object literal
function SprayCanTool()
{
    this.name = "sprayCanTool",
    this.icon = "assets/spray-can.png",
    this.points = 13,
    this.spread = 10,
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed && inCanvas){
            strokeWeight(strokeWidth);
            
            //if color picker is not selected, use Swatchcol as stroke color
            //else use Pickercol as stroke color
            if(colorInput.style.border == "") {
                stroke(Swatchcol);
            }
            else {
                stroke(Pickercol);
            }
            
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }
    
    //adds a button and click handler to the options area.
    //When clicked scissorsTool function runs, allowing cut and paste
    //widthTool allows adjusting of strokeWeight with the slider
	this.populateOptions = function() {
		selectarea = new scissorsTool();
        strokeSize = new widthTool();
        alphavalue = new alphaVal();
	};
}