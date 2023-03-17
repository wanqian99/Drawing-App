//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var colourPicker = null;
var helpers = null;

var selectarea = null;
var strokeSize = null;
var fillMode = null;
var rotating = null;

var starStamp;
var moonStamp;
var sunStamp;
var cloudStamp;
var treeStamp;
var rabbitStamp;

var img;
var context;

var c = null;

var Swatchcol;
var Pickercol;

var inCanvas;

function preload() {
    starStamp = loadImage('./assets/stamps/star.png');
    moonStamp = loadImage('./assets/stamps/moon.png');
    sunStamp = loadImage('./assets/stamps/sun.png');
    cloudStamp = loadImage('./assets/stamps/cloud.png');
    treeStamp = loadImage('./assets/stamps/tree.png');
    rabbitStamp = loadImage('./assets/stamps/rabbit.png');
}

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    
	c.parent("content");
    c.id('canvas');
    
    //get 2d context of canvas
    context = document.getElementById('canvas').getContext('2d');

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
    colourPicker = new ColourPicker();
    fillMode = new fillTool();
    
	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
    toolbox.addTool(new eraserTool());
	toolbox.addTool(new LineToTool());
    toolbox.addTool(new shapeTool());
    toolbox.addTool(new stampTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new textTool());
    toolbox.addTool(new patternTool());
    toolbox.addTool(new kaleidoscopeTool());
	background(255);
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
    
    //to check if mousePressed is in canvas
    inCanvas = 0 < mouseX && mouseX < canvasContainer.size().width && 
               0 < mouseY && mouseY < canvasContainer.size().height;
    
    //set alpha of colour palette colour
    Swatchcol = color(selectedColour);
    Swatchcol.setAlpha(alpha);

    //set alpha of colour picker colour
    Pickercol = color(colorInput.value);
    Pickercol.setAlpha(alpha);
}

//when mousemoves, check for the x and y coordinates
window.addEventListener('mousemove', function (e) {
    document.getElementById('x-value').textContent = e.x - 55;
    document.getElementById('y-value').textContent = e.y - 35;
});
