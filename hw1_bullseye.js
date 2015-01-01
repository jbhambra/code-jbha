window.onload = init;

function init() {
	
	// access the canvas element and its context
     var canvas = document.getElementById("bullseyeCanvas");
     var context = canvas.getContext("2d");

	 // draw an outer green circle
    context.beginPath();
    context.arc(200,200, 200, 0, 2 * Math.PI, true);
    context.stroke();
    context.fillStyle="#006600";
    context.fill();
    context.closePath();
    
    // draw a 2nd inner yellow circle
    context.beginPath();
    context.arc(200,200, 150, 0, 2 * Math.PI, true);
    context.stroke();
    context.fillStyle="#ffff66";
    context.fill();
    context.closePath();

    // draw a 3rd inner green circle
    context.beginPath();
    context.arc(200,200, 100, 0, 2 * Math.PI, true);
    context.stroke();
    context.fillStyle="#006600";
    context.fill();
    context.closePath();

    // draw a 4th inner yellow circle
    context.beginPath();
    context.arc(200,200, 50, 0, 2 * Math.PI, true);
    context.stroke();
    context.fillStyle="#ffff66";
    context.fill();
    context.closePath();
    
}
