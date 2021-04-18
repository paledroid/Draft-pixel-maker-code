// The variables are declared as const as per the Style Guide
// Functions are declared at the top of the script for good practice

// This code adds user inputs to table and colour variables
const grid = document.getElementById("pixelCanvas"); // assigns pixelCanvas to variable grid
const rows = document.getElementById("inputHeight"); // assigns inputHeight to variable rows
const columns = document.getElementById("inputWidth"); // assigns inputWidth to variable columns
const colour = document.getElementById("colorPicker"); // assigns colorPicker to variable colour
const form = document.getElementById("sizePicker"); // assigns sizePicker to variable form

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

// Declares the reset function to reset the grid

function reset () {
  // Removes the grid when the user clicks on 'reset'
  // Note that 'reset' button was added to the html file
    form.addEventListener('reset', function () {
        grid.innerHTML=""
    })
};

// calls makeGrid when grid size is submitted by the user

form.addEventListener('submit', function (event) {
    reset();
    event.preventDefault();
    makeGrid(rows, columns)
//    form.removeEventListener('submit', reset);
});

// enables the user to colour individual cells only

grid.addEventListener('click', function (event) {
    if (event.target.nodeName === 'TD') {
      event.target.style.backgroundColor = colour.value;
    }
})
