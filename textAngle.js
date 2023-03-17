var textangletool = 90;
var inputtextangle;

function TextAngleTool() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(InputTextAngle) in the options div
    inputtextangle = document.createElement('div');
    
    inputtextangle.id = 'InputTextAngle';
    options.appendChild(inputtextangle);
    
    //create a label for the slider
    var InputTextAnglelabel = document.createElement('label');
    InputTextAnglelabel.id = 'InputTextAnglelabelid'
    InputTextAnglelabel.innerHTML = "Text Angle: 90";
    inputtextangle.appendChild(InputTextAnglelabel);

    //create a slider for the text angle, and update the slider value
    var InputTextAngleSlider = createSlider(0, 360, 90, 5);
    InputTextAngleSlider.parent(inputtextangle);
    var angleUpdate = function(){
        textangletool = InputTextAngleSlider.value();
    }
    InputTextAngleSlider.input(angleUpdate);

    //when slider value changes, display its value
    document.getElementById("InputTextAngle").onchange = function() {
        document.getElementById('InputTextAnglelabelid').innerHTML = "Text Angle: " + InputTextAngleSlider.value();
    };
    
    //reset the slider value to 90 when another tool is selected
    if(InputTextAngleSlider.value !== 90) {
        textangletool = 90;
    }
}