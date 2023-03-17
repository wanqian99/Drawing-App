var imgfilter = "opaque";

function imgFilter() {
    var options = document.getElementsByClassName('options')[0];
    var values = ["opaque", "threshold", "gray", "posterize", "blur", "erode", "dilate"];
    
    //create a new div with id(filterInput) in the options div
    var filterinput = document.createElement('div');
    filterinput.id = 'filterInput';
    options.appendChild(filterinput);
    
    //create a label for the slider
    var filterInputlabel = document.createElement('label');
    filterInputlabel.id = 'filterInputlabelid'
    filterInputlabel.innerHTML = "Filter: ";
    filterinput.appendChild(filterInputlabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "filter";
    selectDropdown.id = "filter";
    filterinput.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change the imgfilter to the selected filter
    document.getElementById("filter").onchange = function() {
        imgfilter = document.getElementById('filter').options[document.getElementById('filter').selectedIndex].value;
    };
    
    //reset the imgfilter to opaque when another tool is selected 
    if(imgfilter !== "opaque") {
        imgfilter = "opaque";
    }
}