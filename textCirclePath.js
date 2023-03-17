var startMouseX = -1;
var startMouseY = -1;

function textCirclePath(context, text, radius, angle){
    //saves the state of the current context
    context.save();
    
    //translate context to center of text
    context.translate(startMouseX, startMouseY + radius);
    
    //rotate text start point
    context.rotate(-1 * angle / 2);
    
    //rotate whole text string so text balances(equal on both sides)
    context.rotate(-1 * (angle / text.length) / 2);
    
    
    for (var i = 0; i < text.length; i++) {
        context.rotate(angle / text.length);
        
        //saves the state of the current context
        context.save();
        
        //translate each char out to the edge of the circle
        context.translate(0, -1 * radius);
        var char = text[i];
        
        //if fillmode is true, fill context
        //else context should only have stroke
        if(document.getElementById("fillmode").checked == true) {
            context.fillText(char, 0, 0);
        }
        else {
            context.strokeText(char, 0, 0);
        }
        
        //Returns previously saved path state and attributes
        context.restore();
    }
    //Returns previously saved path state and attributes
    context.restore();
}