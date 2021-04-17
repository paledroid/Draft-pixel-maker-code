// This code adds user inputs to table and colour variables
// The variables are in global scope

var grid = document.getElementById("pixelCanvas"); // assigns pixelCanvas to variable grid
var rows = document.getElementById("inputHeight"); // assigns inputHeight to variable rows
var columns = document.getElementById("inputWidth"); // assigns inputWidth to variable columns
var colour = document.getElementById("colorPicker"); // assigns colorPicker to variable colour
var form = document.getElementById("sizePicker"); // assigns sizePicker to variable form

// This code defines the function makeGrid
// It creates a nested loop and adds rows and cells to the table grid

function makeGrid(rows, columns) {
    for (a = 0; a < rows.value; a++) {
      let row = grid.insertRow(0);
      for (b = 0; b < columns.value; b++) {
        let cell = row.insertCell(0);
      }
    }
};

// This code calls makeGrid when grid size is submitted by the user

form.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(rows, columns)
});

// This code removes the grid when the user clicks on 'reset'
// Note that additional html was added to the html file to add a 'reset' button

form.addEventListener('reset', function () {
  grid.innerHTML=""
});

// This code enables the user to colour individual cells

grid.addEventListener('click', function (event) {
  event.target.style.backgroundColor = colour.value;
});
