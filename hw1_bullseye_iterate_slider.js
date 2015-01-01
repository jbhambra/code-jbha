window.onload = init;

// canvas and context variables
var canvas;
var context;

// center of the pattern
var centerX, centerY;

function init() {
	canvas = document.getElementById("bullseyeCanvas");
	context = canvas.getContext("2d");
	
	centerX = canvas.width / 2;
    centerY = canvas.height / 2;
        
    // draw the initial pattern
    drawPattern();    
};

/**
* use a slider to control the band width. Use a minimum value of 5, 
* maximum value of 50 with step 5, and current value 25. As the value of the slider 
* changes, draw the pattern with the current bandwidth. Write the code in the file 
*/
drawPattern = function() {
	
	// clear the drawing area
    context.clearRect(0, 0, canvas.width, canvas.height);

    // get the current radius
    var bandWidth = document.getElementById("bandWidth").value;
    
	var minRadius = 0;
	var currentRadius = canvas.width / 2;
	var green = "#006600";
	var yellow = "#ffff66";
	
	//Repeat the loop as long as the current radius is greater than 0.
	while (!(currentRadius < minRadius)) {

		// draw circle
		context.beginPath();
		context.arc(200, 200, currentRadius, 0, 2 * Math.PI, true);
		context.stroke();
		context.closePath();

		//subtract 25 for band width
		currentRadius = currentRadius - bandWidth;
        
		//alternate between fill colors
		if(context.fillStyle == green) {
			context.fillStyle = yellow;
		}
		else {
			context.fillStyle = green;
		}
		
		context.fill();

	};
};
