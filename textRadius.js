var textradiustool = 50;
var inputtextradius;

function TextRadiusTool() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(InputTextRadius) in the options div
    inputtextradius = document.createElement('div');

    inputtextradius.id = 'InputTextRadius';  
    options.appendChild(inputtextradius);
    
    //create a label for the slider
    var InputTextRadiuslabel = document.createElement('label');
    InputTextRadiuslabel.id = 'InputTextRadiuslabelid'
    InputTextRadiuslabel.innerHTML = "Text Radius: 50";
    inputtextradius.appendChild(InputTextRadiuslabel);

    //create a slider for the text radius, and update the slider value
    var InputTextRadiusSlider = createSlider(50, 500, 50, 10);
    InputTextRadiusSlider.parent(inputtextradius);
    var radiusUpdate = function(){
        textradiustool = InputTextRadiusSlider.value();
    }
    InputTextRadiusSlider.input(radiusUpdate);

    //when slider value changes, display its value
    document.getElementById("InputTextRadius").onchange = function() {
        document.getElementById('InputTextRadiuslabelid').innerHTML = "Text Radius: " + InputTextRadiusSlider.value();
    };
    
    //reset the slider value to 50 when another tool is selected
    if(InputTextRadiusSlider.value !== 50) {
        textradiustool = 50;
    }
}