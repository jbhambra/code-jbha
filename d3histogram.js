
/* add this css */
/*

body {
  font: 10px sans-serif;
}

.bar rect {
  fill: steelblue;
  shape-rendering: crispEdges;
}

.bar text {
  fill: #fff;
}

.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

*/
/*d3 script to create a histogram */
var margin = {top: 10, right: 20, bottom: 20, left: 60},
    width = 560 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);
    
    var bins = [
    { "x": 390,  "y": 1400 },
    { "x": 446, "y": 400 },
    { "x": 675, "y":0.3 },
     { "x": 747,  "y": 0.4 },
    { "x": 969, "y": 1 },
    { "x": 999, "y":7 },
  { "x": 1307,  "y": 1 },
    { "x": 1428, "y": 7 },
    { "x": 1446, "y":1 },
  { "x": 1571,  "y": 1 },
    { "x": 1862, "y": 7 },
    { "x": 2423, "y":1 },
  { "x": 2631,  "y": 1 },
    { "x": 3485, "y": 7 },
    { "x": 3518, "y":1 },
  { "x": 4562,  "y": 250 },
    { "x": 4726, "y": 1 },
    { "x": 5038, "y":1 },
  { "x": 5351,  "y": 7 },
    { "x": 5450, "y": 1 },
    { "x": 5746, "y":1 },
  { "x": 6712,  "y": 7 },
    { "x": 7443, "y": 1 },
    { "x": 8091, "y":1 },
  { "x": 8781,  "y": 1 },
    { "x": 9968, "y": 1 },
    { "x": 14241, "y":0.78 },
  { "x": 14956,  "y": 7 },
    { "x": 15188, "y": 1 },
    { "x": 15334, "y":1 },
  { "x": 15435,  "y": 6 },
    { "x": 15455, "y": 1 },
    { "x": 15635, "y":1 },
  { "x": 16076,  "y": 1 },
    { "x": 16230, "y": 7 },
    { "x": 16324, "y":1 },
  { "x": 16698,  "y": 7 },
    { "x": 17742, "y": 1 },
    { "x": 17996, "y":1 },
  { "x": 25000,  "y": 4 }
   ];


console.log(bins)

  // Coerce types.
  bins.forEach(function(bin) {
    bin.x = +bin.x;
    bin.y = +bin.y;
  });

  // Normalize each bin to so that height = quantity/width;
  // see http://en.wikipedia.org/wiki/Histogram#Examples
  for (var i = 0, n = bins.length, bin; i < n; i++) {
    bin = bins[i];
 
    bin.offset = bins[i].x;
    bin.width = 360;
    bin.height = bin.y;
       console.log("bins" + bin);
  }

  // Drop the first bin, since it's incorporated into the next.
//  bins.shift();

  // Set the scale domain.
  x.domain([0, d3.max(bins.map(function(d) { return d.offset + d.width; }))]);
  y.domain([0, d3.max(bins.map(function(d) { return d.height; }))]);

  // Add the bins.
  svg.selectAll(".bin")
      .data(bins)
    .enter().append("rect")
      .attr("class", "bin")
      .attr("x", function(d) { return x(d.offset); })
      .attr("width", function(d) { return x(d.width) - 1; })
      .attr("y", function(d) { return y(d.height); })
      .attr("height", function(d) { return height - y(d.height); }).append("svg:title")
      .text(function(d,i){
       return bins[i].x;
      });

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.svg.axis()
      .scale(x)
      .orient("bottom"));
      

  svg.append("g")
      .attr("class", "y axis")
      .call(d3.svg.axis()
      .scale(y)
      .orient("left"));
