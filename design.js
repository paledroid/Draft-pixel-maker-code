// Select color input
// Select size input

// This code adds user inputs to variables

  var g = document.getElementById("pixelCanvas");
  var h = document.getElementById("inputHeight");
  var w = document.getElementById("inputWidth");
  var c = document.getElementById("colorPicker");
  var f = document.getElementById("sizePicker");

// This code calls makeGrid when grid size is submitted by the user

f.addEventListener('submit', makeGrid(g,h,w));

// This code defines the function makeGrid

function makeGrid(g,h,w) {

// This code creates a nested loop and adds rows and cells to the table g

  for (var row = 1; row < h; row++) {
    var x = g.insertRow(row);
    document.g.appendChild(x);
    for (var cell = 1; cell < w; cell++) {
      var y = g.insertCell(cell);
      document.g.appendChild(y);
    }
  }
};
