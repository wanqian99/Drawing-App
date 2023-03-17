var fillstatus = false;

function fillTool() {
    var checkboxoptions = document.getElementsByClassName('colourPicker')[0];
    
    //create a new div with id(fillcheckboxid) in the checkboxoptions div
    var fillcheckbox = document.createElement('div');
    fillcheckbox.id = 'fillcheckboxid';
    checkboxoptions.appendChild(fillcheckbox);
    
    //create a new label with id(fillmodeLabel) in the checkboxoptions div
    var fillmodeLabel = document.createElement('label');
    fillmodeLabel.innerHTML = "Fill";
    fillcheckbox.appendChild(fillmodeLabel);
    
    //using p5.dom create a new checkbox
    var fillMode = document.createElement('input');
    fillMode.id = 'fillmode';
    fillMode.type = 'checkbox';
    fillmodeLabel.appendChild(fillMode);
    
    //add event listener to checkbox
    //When checkbox selected(true), set fillstatus to true
    //When checkbox is not selected(false), set fillstatus to false
    fillMode.addEventListener("change", function() {
        if(this.checked) {
            fillstatus = true;
        }
        else {
            fillstatus = false;
        }
    })
}