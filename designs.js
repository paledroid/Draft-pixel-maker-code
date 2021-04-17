// Notes on scope
  // The variables are in global scope as the code is simple
  // The grid variables in makeGrid are defined only in local scope

// Note on code structure
  // Functions are declared at the top of the script for good practice
  // addEventListener code has been refactored into a function

// This code adds user inputs to table and colour variables
var grid = document.getElementById("pixelCanvas"); // assigns pixelCanvas to variable grid
var rows = document.getElementById("inputHeight"); // assigns inputHeight to variable rows
var columns = document.getElementById("inputWidth"); // assigns inputWidth to variable columns
var colour = document.getElementById("colorPicker"); // assigns colorPicker to variable colour
var form = document.getElementById("sizePicker"); // assigns sizePicker to variable form

// Defines the function makeGrid

function makeGrid(rows, columns) {
    // Creates a nested loop and adds rows and cells to the table grid
    for (a = 0; a < rows.value; a++) {
      let row = grid.insertRow(0);
      for (b = 0; b < columns.value; b++) {
        let cell = row.insertCell(0);
      }
    }
};

// Defines the function pixelMaker to refactor individual lines of code

function pixelMaker () {

    // calls makeGrid when grid size is submitted by the user
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      makeGrid(rows, columns)
    });

    // enables the user to colour individual cells
    grid.addEventListener('click', function (event) {
      event.target.style.backgroundColor = colour.value;
    });

    // Removes the grid when the user clicks on 'reset'
    // Note that 'reset' button was added to the html file
    form.addEventListener('reset', function () {
      grid.innerHTML=""
    });
};

// calls the pixelMaker function
pixelMaker();
