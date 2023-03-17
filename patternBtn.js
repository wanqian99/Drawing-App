var patternMode = null;

function patternBtn() {
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(ellipsepatternid) in the checkboxoptions div
    var pattern = document.createElement('div');
    pattern.id = 'patternid';
    options.appendChild(pattern);
    
    
    //----------ELLIPSE PATTERN
    //using p5.dom create a new button
    //add image to the button
    var ellipseBtn = document.createElement('button');
    ellipseBtn.id = 'ellipseBtn';
    ellipseBtn.innerHTML = '<img src="assets/patterns/ellipse.png">';
    pattern.appendChild(ellipseBtn);
    
    //set pattern to ellipse by default, and set the border
    ellipseBtn.style.border = "2px solid salmon";
    ellipseBtn.style.borderRadius = "23px";
    patternMode = "Ellipse";
    
    //add event listener to checkbox
    //When checkbox selected(true), set fillstatus to true
    //When checkbox is not selected(false), set fillstatus to false
    ellipseBtn.addEventListener("click", function() {
        rectBtn.style.border = "0";
        triangleBtn.style.border = "0";
        ellipseBtn.style.border = "2px solid salmon";
        ellipseBtn.style.borderRadius = "23px";
        patternMode = "Ellipse";
    })
    
    
    //----------RECTANGLE PATTERN
    //using p5.dom create a new button
    //add image to the button
    var rectBtn = document.createElement('button');
    rectBtn.id = 'rectBtn';
    rectBtn.innerHTML = '<img src="assets/patterns/square.png">';
    pattern.appendChild(rectBtn);
    
    //add event listener to checkbox
    //When checkbox selected(true), set fillstatus to true
    //When checkbox is not selected(false), set fillstatus to false
    rectBtn.addEventListener("click", function() {
        ellipseBtn.style.border = "0";
        triangleBtn.style.border = "0";
        rectBtn.style.border = "2px solid salmon";
        rectBtn.style.borderRadius = "23px";
        patternMode = "Rectangle";
    })
    
    
    //----------TRIANGLE PATTERN
    //using p5.dom create a new button
    //add image to the button
    var triangleBtn = document.createElement('button');
    triangleBtn.id = 'triangleBtn';
    triangleBtn.innerHTML = '<img src="assets/patterns/triangle.png">';
    pattern.appendChild(triangleBtn);
    
    //add event listener to checkbox
    //When checkbox selected(true), set fillstatus to true
    //When checkbox is not selected(false), set fillstatus to false
    triangleBtn.addEventListener("click", function() {
        ellipseBtn.style.border = "0";
        rectBtn.style.border = "0";
        triangleBtn.style.border = "2px solid salmon";
        triangleBtn.style.borderRadius = "23px";
        patternMode = "Triangle";
    })
}



//if the mouse is moving slowly, draws a small ellipse 
//if the mouse is moving quickly, draws a large ellipse 
function speedEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  ellipse(x, y, speed, speed);
}

//if the mouse is moving slowly, draws a small rect 
//if the mouse is moving quickly, draws a large rect 
function speedRect(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  rect(x, y, speed, speed);
}

//if the mouse is moving slowly, draws a small triangle
//if the mouse is moving quickly, draws a large triangle
function speedTriangle(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  triangle(x, y, x+speed/2, y-speed, x+speed, y);
}