var rotatetool = 0;
function rotateTool() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(InputRotate) in the options div
    var inputrotate = document.createElement('div');
    inputrotate.id = 'InputRotate';
    options.appendChild(inputrotate);
    
    //create a label for the slider
    var InputRotatelabel = document.createElement('label');
    InputRotatelabel.id = 'InputRotatelabelid'
    InputRotatelabel.innerHTML = "Rotate: 0&#176";
    inputrotate.appendChild(InputRotatelabel);

    //create a slider for the rotatation angle, and update the slider value to the angle
    var InputRotateSlider = createSlider(-180, 180, 0, 5);
    InputRotateSlider.parent(inputrotate);
    var rotateUpdate = function(){
        rotatetool = InputRotateSlider.value();
    }
    InputRotateSlider.input(rotateUpdate);

    //when slider value changes, display its value
    document.getElementById("InputRotate").onchange = function() {
        document.getElementById('InputRotatelabelid').innerHTML = "Rotate: " + InputRotateSlider.value() + "&#176";
    };
    
    //reset the slider value to 0 when another tool is selected
    if(InputRotateSlider.value !== 0) {
        rotatetool = 0;
    }
}