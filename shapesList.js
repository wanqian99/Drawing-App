var shape = "Rectangle";
function shapesList() {
    var options = document.getElementsByClassName('options')[0];
    
    //array of shapes to be selected from the dropdown list
    var values = ["Rectangle", "Ellipse", "Polygon"];
    
    //create a new div with id(shapeInput) in the options div
    var shapeinput = document.createElement('div');
    shapeinput.id = 'shapeInput';
    options.appendChild(shapeinput);
    
    //create a label for the dropdown
    var shapeInputlabel = document.createElement('label');
    shapeInputlabel.id = 'shapeInputlabelid'
    shapeInputlabel.innerHTML = "Shape: ";
    shapeinput.appendChild(shapeInputlabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "shapes";
    selectDropdown.id = "shapes";
    shapeinput.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change the shape to the selected shape
    document.getElementById("shapes").onchange = function() {
        shape = document.getElementById('shapes').options[document.getElementById('shapes').selectedIndex].value;
    };
    
    //set shape back to rectangle by default when another tool is selected
    shape = "Rectangle";
}