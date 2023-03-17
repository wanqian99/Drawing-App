var textfont = "Arial";

function textFonts() {
    var options = document.getElementsByClassName('options')[0];
    
    var values = ["Arial", "American Typewriter", "Bradley Hand", "Brush Script MT", "Comic Sans MS", "Copperplate", "Courier New", "Didot", "Georgia", "Impact", "Luminari", "Monaco", "Papyrus", "Times New Roman", "Verdana"];
    
    //create a new div with id(textInputFont) in the options div
    var textinputfont = document.createElement('div');
    textinputfont.id = 'textInputFont';
    options.appendChild(textinputfont);
    
    //create a label for the slider
    var textInputFontlabel = document.createElement('label');
    textInputFontlabel.id = 'textInputFontlabelid'
    textInputFontlabel.innerHTML = "Font Family: ";
    textinputfont.appendChild(textInputFontlabel);
    
    //create a select element to store the option
    var selectDropdown = document.createElement("select");
    selectDropdown.name = "fontfamily";
    selectDropdown.id = "fontfamily";
    textinputfont.appendChild(selectDropdown);
    
    for (const val of values) {
        var dropdownOption = document.createElement("option");
        dropdownOption.value = val;
        dropdownOption.text = val.charAt(0).toUpperCase() + val.slice(1);
        selectDropdown.appendChild(dropdownOption);
    }
    
    //change text font to the selected font
    document.getElementById("fontfamily").onchange = function() {
        textfont = document.getElementById('fontfamily').options[document.getElementById('fontfamily').selectedIndex].value;
    };
    
    //reset the font to Arial when another tool is selected
    textfont = "Arial";
}