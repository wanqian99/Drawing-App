var alpha;
var alphainput;

function alphaVal() {
    //set alpha to 255(opacity 100%) by default
    alpha = 255;
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(alphaInput) in the options div
    alphainput = document.createElement('div');
    alphainput.id = 'alphaInput';
    options.appendChild(alphainput);
    
    //create a label for the slider
    var alphaInputlabel = document.createElement('label');
    alphaInputlabel.id = 'alphaInputlabelid'
    alphaInputlabel.innerHTML = "Opacity: 100%";
    alphainput.appendChild(alphaInputlabel);

    //create a slider for the alpha, and update the slider value
    var alphaInputSlider = createSlider(0, 255, 255, 2.55);
    alphaInputSlider.parent(alphainput);
    var alphaUpdate = function(){
        alpha = alphaInputSlider.value();
    }
    alphaInputSlider.input(alphaUpdate);

    //when slider value changes, display its value
    //convert alpha value to percentage
    document.getElementById("alphaInput").onchange = function() {
        document.getElementById('alphaInputlabelid').innerHTML = "Opacity: " + Math.round(alphaInputSlider.value()/2.55) + "%";
    };
    
    //reset the slider value to 255 when another tool is selected
    if(alphaInputSlider.value !== 255) {
        alpha = 255;
    }
}