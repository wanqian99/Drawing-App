var textpath = "None";

function textAlongPath() {
    var options = document.getElementsByClassName('options')[0];
    
    var values = ["None", "Circle", "Curve"];
    
    //create a new div with id(textInputPath) in the options div
    var textinputpath = document.createElement('div');
    textinputpath.id = 'textInputPath';
    options.appendChild(textinputpath);
    
    //create a label for the slider
    var textInputPathlabel = document.createElement('label');
    textInputPathlabel.id = 'textInputPathlabelid'
    textInputPathlabel.innerHTML = "Text Path: &nbsp;&nbsp;&nbsp;&nbsp;";
    textinputpath.appendChild(textInputPathlabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "textpaths";
    selectDropdown.id = "textpaths";
    textinputpath.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change text path to the selected path
    document.getElementById("textpaths").onchange = function() {
        textpath = document.getElementById('textpaths').options[document.getElementById('textpaths').selectedIndex].value;
    };
    
    //reset textpath to none when another tool is selected
    textpath = "None";
}