var textstyle = "normal";

function textStyling() {
    var options = document.getElementsByClassName('options')[0];
    var values = ["normal", "italic", "bold", "bolditalic"];
    
    //create a new div with id(textInputStyle) in the options div
    var textinputstyle = document.createElement('div');
    textinputstyle.id = 'textInputStyle';
    options.appendChild(textinputstyle);
    
    //create a label for the slider
    var textInputStylelabel = document.createElement('label');
    textInputStylelabel.id = 'textInputStylelabelid'
    textInputStylelabel.innerHTML = "Font Style: &nbsp;&nbsp;&nbsp;";
    textinputstyle.appendChild(textInputStylelabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "style";
    selectDropdown.id = "style";
    textinputstyle.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change the text style to the selected style
    document.getElementById("style").onchange = function() {
        textstyle = document.getElementById('style').options[document.getElementById('style').selectedIndex].value;
    };
    
    //reset the text style to normal when another tool is selected 
    if(textstyle !== "normal") {
        textstyle = "normal";
    }
}