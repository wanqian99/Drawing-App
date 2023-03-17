var textsize = 10;

function textSizing() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(textInputSize) in the options div
    var textinputsize = document.createElement('div');
    textinputsize.id = 'textInputSize';
    options.appendChild(textinputsize);
    
    //create a label for the slider
    var textInputSizelabel = document.createElement('label');
    textInputSizelabel.id = 'textInputSizelabelid'
    textInputSizelabel.innerHTML = "Font Size: 10pt";
    textinputsize.appendChild(textInputSizelabel);

    //create a slider for the text size, and update the slider value
    var textInputSizeSlider = createSlider(10, 100, 10, 1);
    textInputSizeSlider.parent(textinputsize);
    var sizeUpdate = function(){
        textsize = textInputSizeSlider.value();
    }
    textInputSizeSlider.input(sizeUpdate);

    //when slider value changes, display its value
    document.getElementById("textInputSize").onchange = function() {
        document.getElementById('textInputSizelabelid').innerHTML = "Font Size: " + textInputSizeSlider.value() + "pt";
    };
    
    //reset the slider value to 10 when another tool is selected
    if(textInputSizeSlider.value !== 10) {
        textsize = 10;
    }
}