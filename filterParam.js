var param;
var thresholdparam;
var posterizeparam;
var blurparam;
var thresholdparaminput;
var posterizeparaminput;
var blurparaminput;

function thresholdParam() {
    //set param to be thresholdparam
    param = thresholdparam;
    
    //set thresholdparam to 0.5 by default
    thresholdparam = 0.5;
    
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(thresholdParamInput) in the options div
    thresholdparaminput = document.createElement('div');
    thresholdparaminput.id = 'thresholdParamInput';
    options.appendChild(thresholdparaminput);
    
    //create a label for the slider
    var thresholdParamInputlabel = document.createElement('label');
    thresholdParamInputlabel.id = 'thresholdParamInputlabelid'
    thresholdParamInputlabel.innerHTML = "Threshold: 0.5";
    thresholdparaminput.appendChild(thresholdParamInputlabel);

    //create a slider for the thresholdparam, and update the slider value
    var thresholdParamInputSlider = createSlider(0.0, 1, 0.5, 0.1);
    thresholdParamInputSlider.parent(thresholdparaminput);
    var thresholdUpdate = function(){
        thresholdparam = thresholdParamInputSlider.value();
    }
    thresholdParamInputSlider.input(thresholdUpdate);

    //when slider value changes, display its value
    document.getElementById("thresholdParamInput").onchange = function() {
        document.getElementById('thresholdParamInputlabelid').innerHTML = "Threshold: " + thresholdParamInputSlider.value();
    };
    
    //reset the slider value to 0.5 when another tool is selected
    if(thresholdParamInputSlider.value !== 0.5) {
        thresholdparam = 0.5;
    }
}



function posterizeParam() {
    //set param to be posterizeparam
    param = posterizeparam;
    
    //set posterizeparam to 2 by default
    posterizeparam = 2;
    
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(posterizeParamInput) in the options div
    posterizeparaminput = document.createElement('div');
    posterizeparaminput.id = 'posterizeParamInput';
    options.appendChild(posterizeparaminput);
    
    //create a label for the slider
    var posterizeParamInputlabel = document.createElement('label');
    posterizeParamInputlabel.id = 'posterizeParamInputlabelid'
    posterizeParamInputlabel.innerHTML = "Posterize: 2";
    posterizeparaminput.appendChild(posterizeParamInputlabel);

    //create a slider for the posterizeparam, and update the slider value
    var posterizeParamInputSlider = createSlider(2, 255, 2, 1);
    posterizeParamInputSlider.parent(posterizeparaminput);
    var posterizeUpdate = function(){
        posterizeparam = posterizeParamInputSlider.value();
    }
    posterizeParamInputSlider.input(posterizeUpdate);

    //when slider value changes, display its value
    document.getElementById("posterizeParamInput").onchange = function() {
        document.getElementById('posterizeParamInputlabelid').innerHTML = "Posterize: " + posterizeParamInputSlider.value();
    };
    
    //reset the slider value to 2 when another tool is selected
    if(posterizeParamInputSlider.value !== 2) {
        posterizeparam = 2;
    }
}



function blurParam() {
    //set param to blurparam
    param = blurparam;
    
    //set blurparam to 0 by default
    blurparam = 0;
    
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(blurParamInput) in the options div
    blurparaminput = document.createElement('div');
    blurparaminput.id = 'blurParamInput';
    options.appendChild(blurparaminput);
    
    //create a label for the slider
    var blurParamInputlabel = document.createElement('label');
    blurParamInputlabel.id = 'blurParamInputlabelid'
    blurParamInputlabel.innerHTML = "Blur: 0";
    blurparaminput.appendChild(blurParamInputlabel);

    //create a slider for the blurparam, and update the slider value
    var blurParamInputSlider = createSlider(0, 50, 0, 1);
    blurParamInputSlider.parent(blurparaminput);
    var blurUpdate = function(){
        blurparam = blurParamInputSlider.value();
    }
    blurParamInputSlider.input(blurUpdate);

    //when slider value changes, display its value
    document.getElementById("blurParamInput").onchange = function() {
        document.getElementById('blurParamInputlabelid').innerHTML = "Blur: " + blurParamInputSlider.value();
    };
    
    //reset the slider value to 0 when another tool is selected
    if(blurParamInputSlider.value !== 0) {
        blurparam = 0;
    }
}