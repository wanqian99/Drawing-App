var strokeWidth = 1;
function widthTool() {
    var options = document.getElementsByClassName('options')[0];

    //create a new div with id(strokeSlider) in the options div
    var strokeslider = document.createElement('div');
    strokeslider.id = 'strokeSlider';
    options.appendChild(strokeslider);
    
    //create a label for the slider
    var widthInputlabel = document.createElement('label');
    widthInputlabel.id = 'widthInputlabelid'
    widthInputlabel.innerHTML = "Strokewidth: 1px";
    strokeslider.appendChild(widthInputlabel);

    //create a slider for the strokewidth, and update the slider value
    var strokeWidthSlider = createSlider(1, 50, 1, 1);
    strokeWidthSlider.parent(strokeslider);
    var widthUpdate = function(){
        strokeWidth = strokeWidthSlider.value();
    }
    strokeWidthSlider.input(widthUpdate);

    //when slider value changes, display its value
    document.getElementById("strokeSlider").onchange = function() {
        document.getElementById('widthInputlabelid').innerHTML = "Strokewidth: " + strokeWidthSlider.value() + "px";
    };
    
    //reset the slider value to 1 when another tool is selected
    if(strokeWidthSlider.value !== 1) {
        strokeWidth = 1;
    }
}