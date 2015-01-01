window.onload = init;

function init() {
	// access the canvas element and its context
	var canvas = document.getElementById("bullseyeCanvas");
	var context = canvas.getContext("2d");

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
		currentRadius = currentRadius - 25;
        
		//alternate between fill colors
		if(context.fillStyle == green) {
			context.fillStyle = yellow;
		}
		else {
			context.fillStyle = green;
		}
		
		context.fill();

	}
}
