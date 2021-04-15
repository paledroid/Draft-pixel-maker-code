// Select color input
// Select size input

// This code gets the input height and width from the user input in the HTML

  var grid = document.getElementById("pixelCanvas");
  var height = document.getElementById("inputHeight");
  var width = document.getElementById("inputWidth");
  var color = document.getElementById("colorPicker");
  var form = document.getElementById("sizePicker");

// This code calls makeGrid whhen size is submitted by the user

form.addEventListener('submit', makeGrid(height, width));

// This code defines the function makeGrid

function makeGrid(height, width) {

// This code creates the grid...
// firstly by looping over the height input to create rows...
// and then by appending each row to the table pixelCanvas

  for (var h = 1; h < inputHeight; h++) {
    var row = document.createElement("tr");
    document.grid.appendChild(row);

// This code them creates the cells in each row...
// and appends it to the table too

    for (var w = 1; w < inputWidth; w++) {
      var cell = document.createElement("td");
      document.grid.appendChild(cell);
    }
  }
}
