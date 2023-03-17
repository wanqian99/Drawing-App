var stamp = "Star";
function stampsList() {
    var options = document.getElementsByClassName('options')[0];
    
    //array of shapes to be selected from the dropdown list
    var values = ["Star", "Moon", "Sun", "Cloud", "Tree", "Rabbit"];
    
    //create a new div with id(stampInput) in the options div
    var stampinput = document.createElement('div');
    stampinput.id = 'stampInput';
    options.appendChild(stampinput);
    
    //create a label for the dropdown
    var stampInputlabel = document.createElement('label');
    stampInputlabel.id = 'stampInputlabelid'
    stampInputlabel.innerHTML = "Stamp: ";
    stampinput.appendChild(stampInputlabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "stamps";
    selectDropdown.id = "stamps";
    stampinput.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change the shape to the selected shape
    document.getElementById("stamps").onchange = function() {
        stamp = document.getElementById('stamps').options[document.getElementById('stamps').selectedIndex].value;
    };
    
    //set stamp back to star by default when another tool is selected
    stamp = "Star";
}