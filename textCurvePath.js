var startMouseX = -1;
var startMouseY = -1;

function textCurvePath(context, text, radius, angle){
    //saves the state of the current context
    context.save();
    
    //translate context to center of text
    context.translate(startMouseX - radius, startMouseY);

    //rotate text start point
    context.rotate(-1 * angle / 2);
    
    //rotate whole text string so text balances(equal on both sides)
    context.rotate(-1 * (angle / text.length) / 2);
    
    
    //split the 1st part of the string into substr
    var first = text.substr(0, text.length/2);
    
    for (var i = 0; i < first.length; i++) {
        context.rotate(angle / first.length);
        
        //saves the state of the current context
        context.save();
        
        //translate each char out to the edge of the circle
        context.translate(0, -1 * radius);
        
        var char = first[i];
        
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
    
    
    
    //translate second substr to right (to make the S curve)
    context.translate(0, -2 * radius);
    
    //split the 2nd part of the string into substr
    var second = text.substr(text.length/2, text.length);
    
    //split the second substr, split into char, 
    //reverse the order of the chars, and join back the substr
    second = second.split('').reverse().join('');
    
    //rotate text start point
    context.rotate(-1 * angle / second.length);
    
    for (var i = 0; i < second.length; i++) {
        context.rotate(angle / second.length);
        
        //saves the state of the current context
        context.save();
        
        //translate each char out to the edge of the circle
        context.translate(0, -1 * radius);
        
        var char = second[i];
        
        //rotate each char by 180deg
        context.rotate(angle);
        
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