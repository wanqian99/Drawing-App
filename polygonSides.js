var sides = 3;
var inputsides;
function polygonSides() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(InputSides) in the options div
    inputsides = document.createElement('div');
    inputsides.id = 'InputSides';
    options.appendChild(inputsides);
    
    //create a label for the slider
    var InputSideslabel = document.createElement('label');
    InputSideslabel.id = 'InputSideslabelid'
    InputSideslabel.innerHTML = "Number of Sides: 3";
    inputsides.appendChild(InputSideslabel);

    //create a slider for the number of sides, and update the slider value to the number of sides
    var InputSidesSlider = createSlider(3, 20, 3, 1);
    InputSidesSlider.parent(inputsides);
    var sidesUpdate = function(){
        sides = InputSidesSlider.value();
    }
    InputSidesSlider.input(sidesUpdate);

    //when slider value changes, display its value
    document.getElementById("InputSides").onchange = function() {
        document.getElementById('InputSideslabelid').innerHTML = "Number of Sides: " + InputSidesSlider.value();
    };
    
    //reset the slider value to 3 when another tool is selected
    if(InputSidesSlider.value !== 3) {
        sides = 3;
    }
}