var textinput = "";

function textInput() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(textInputBox) in the options div
    var textInputbox = document.createElement('div');
    textInputbox.id = 'textInputBox';
    options.appendChild(textInputbox);
    
    //create a label for the input box
    var textInputlabel = document.createElement('label');
    textInputlabel.innerHTML = "Text: ";
    textInputbox.appendChild(textInputlabel);

    //create an input box and update the textinput to the textInput.value
    var textInput = createInput('');
    textInput.parent(textInputlabel);
    var textInputUpdate = function(){
        textinput = textInput.value();
    }
    textInput.input(textInputUpdate);
    
    //reset the slider value to "" when another tool is selected
    if(textInput.value !== "") {
        textinput = "";
    }
}