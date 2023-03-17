function stampAdjustTool() {
    var options = document.getElementsByClassName('options')[0];

    //---Number of Stamps slider---//
    //create a new div with id(numberOfStampsControl) in the options div
    var numStampsSlider = document.createElement('div');
    numStampsSlider.id = 'numberOfStampsControl';
    options.appendChild(numStampsSlider);

    var numStampsSliderid = select("#numberOfStampsControl");
    
    //create a label for the slider
    var numStampslabel = document.createElement('label');
    numStampslabel.id = 'numStampslabelid'
    numStampslabel.innerHTML = "Number of Stamps: 1";
    numStampsSlider.appendChild(numStampslabel);

    //create a slider in an id(numStampsSliderid), and update the slider value to the number of Stamps
    nStampSlider = createSlider(1, 5, 1, 1);
    nStampSlider.parent(numStampsSliderid);
    var numStampUpdate = function() {
        stampSize = nStampSlider.value();
    }
    nStampSlider.input(numStampUpdate);

    //when slider value changes, display its value
    document.getElementById("numberOfStampsControl").onchange = function() {
        document.getElementById('numStampslabelid').innerHTML = "Number of Stamps: " + nStampSlider.value();
    };

    
    //---Size of Stamps slider---//
    //create a new div with id(sizeOfStampControl) in the options div
    var sizeStampsSlider = document.createElement('div');
    sizeStampsSlider.id = 'sizeOfStampControl';
    options.appendChild(sizeStampsSlider);

    var sizeStampsSliderid = select("#sizeOfStampControl");

    //create a label for the slider
    var sizeStampslabel = document.createElement('label');
    sizeStampslabel.id = 'sizeStampslabelid'
    sizeStampslabel.innerHTML = "Size of Stamp: 10";
    sizeStampsSlider.appendChild(sizeStampslabel);
    
    //create a slider in an id(sizeStampsSliderid), and update the slider value to the number of Stamps
    stampSizeSlider = createSlider(10, 100, 10, 5);
    stampSizeSlider.parent(sizeStampsSliderid);
    var sizeStampUpdate = function() {
        stampSize = stampSizeSlider.value();
    }
    stampSizeSlider.input(sizeStampUpdate);

    //when slider value changes, display its value
    document.getElementById("sizeOfStampControl").onchange = function() {
        document.getElementById('sizeStampslabelid').innerHTML = "Size of Stamp: " + stampSizeSlider.value();
    };
}