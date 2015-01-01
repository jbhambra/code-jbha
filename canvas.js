

window.onload = init;

function init() {
	// access the canvas element and its context
	var canvas = document.getElementById("testCanvas");
	var context = canvas.getContext("2d");

   var verticalBarHeight = canvas.height;
   
   var canvasWidth = canvas.height * 2;
   
//   context.strokeRect(0, 0, canvasWidth, verticalBarHeight);
   
   var green = "#006600";
	var yellow = "#ffff66";
	
	var rectWidth = 50;
	
	var currentWidth = 0;
	
	var currentHeight = 0;

///start with 0 height and max 50
	//Repeat the loop as long as the current radius is greater than 0.
	while (currentWidth < canvasWidth) {
        
	console.info(currentWidth);
	console.info(rectWidth);
	
	
	context.fillStyle = "#006600";
	context.strokeRect(currentWidth, currentHeight, rectWidth, verticalBarHeight);
	
	currentWidth = rectWidth;	
	rectWidth = rectWidth + 50;
	
	if(context.fillSytle = "#006600"){
		context.fillStyle = "ffff66"; //yellow
	}

        
	console.info(currentWidth);
	console.info(rectWidth);
}

}