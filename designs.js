// Select color input
// Select size input

// This code adds user inputs to variables

  var grid = document.getElementById("pixelCanvas");
  var height = document.getElementById("inputHeight");
  var width = document.getElementById("inputWidth");
  var colour = document.getElementById("colorPicker");
  var form = document.getElementById("sizePicker");

// This code calls makeGrid when grid size is submitted by the user

form.addEventListener('submit', makeGrid(grid, height, width);

// This code defines the function makeGrid
// It creates a nested loop...
// And adds rows and cells to the table grid

function makeGrid(grid, height, width) {
  if height + width = 2 {
    event.preventDefault();
  }
  else {
    for (var a = 0; a < height.value; a++) {
      var row = grid.insertRow(0);
      for (var b = 0; b < width.value; b++) {
        var cell = row.insertCell(0);
    }
      }
  }
});
