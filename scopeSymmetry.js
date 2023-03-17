// Symmetry corresponding to the number of reflections
//Change the number for different number of reflections 
var symmetry = 2;

function scopeSymmetry() {
    var options = document.getElementsByClassName('options')[0];

    //create a new div with id(scopeSymmetry) in the options div
    var scopesymmetry = document.createElement('div');
    scopesymmetry.id = 'scopeSymmetry';
    options.appendChild(scopesymmetry);
    
    //create a label for the slider
    var symmetrylabel = document.createElement('label');
    symmetrylabel.id = 'symmetrylabelid'
    symmetrylabel.innerHTML = "Symmetry: 2";
    scopesymmetry.appendChild(symmetrylabel);

    //create a slider for the symmetry, and update the slider value
    var symmetrySlider = createSlider(2, 10, 1, 1);
    symmetrySlider.parent(scopesymmetry);
    var symmetryUpdate = function(){
        symmetry = symmetrySlider.value();
    }
    symmetrySlider.input(symmetryUpdate);

    //when slider value changes, display its value
    document.getElementById("scopeSymmetry").onchange = function() {
        document.getElementById('symmetrylabelid').innerHTML = "Symmetry: " + symmetrySlider.value();
    };
    
    //reset the slider value to 2 when another tool is selected
    if(symmetrySlider.value !== 2) {
        symmetry = 2;
    }
}