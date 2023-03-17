var randomstatus = false;

function randomCol() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(randomcheckboxid) in the checkboxoptions div
    var randomcheckbox = document.createElement('div');
    randomcheckbox.id = 'randomcheckboxid';
    options.appendChild(randomcheckbox);
    
    //create a new label with id(randommodeLabel) in the checkboxoptions div
    var randommodeLabel = document.createElement('label');
    randommodeLabel.innerHTML = "Random Color";
    randomcheckbox.appendChild(randommodeLabel);
    
    //using p5.dom create a new checkbox
    var randomMode = document.createElement('input');
    randomMode.id = 'randommode';
    randomMode.type = 'checkbox';
    randommodeLabel.appendChild(randomMode);
    
    //add event listener to checkbox
    //When checkbox selected(true), set randomstatus to true
    //When checkbox is not selected(false), set randomstatus to false
    randomMode.addEventListener("change", function() {
        if(this.checked) {
            randomstatus = true;
        }
        else {
            randomstatus = false;
        }
    })
    
    //set random status to false by default when another tool is selected
    if(randomstatus !== false) {
        randomstatus = false;
    }
}