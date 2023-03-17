var backgroundstatus = false;
var backgroundMode;

function backgroundImage() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(imgcheckboxid) in the checkboxoptions div
    var imgcheckbox = document.createElement('div');
    imgcheckbox.id = 'imgcheckboxid';
    options.appendChild(imgcheckbox);
    
    //create a new label with id(backgroundmodeLabel) in the checkboxoptions div
    var backgroundmodeLabel = document.createElement('label');
    backgroundmodeLabel.innerHTML = "Background";
    imgcheckbox.appendChild(backgroundmodeLabel);
    
    //using p5.dom create a new checkbox
    backgroundMode = document.createElement('input');
    backgroundMode.id = 'backgroundmode';
    backgroundMode.type = 'checkbox';
    backgroundmodeLabel.appendChild(backgroundMode);

    //add event listener to checkbox
    //When checkbox selected(true), backgroundstatus true
    //When checkbox is not selected(false), make backgroundstatus false
    backgroundMode.addEventListener("change", function() {
        if(this.checked) {
            backgroundstatus = true;
        }
        else {
            backgroundstatus = false;
        }
    })
}