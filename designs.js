// The variables are declared as const so that they have block-scope and cannot be reassigned
// Functions are declared at the top of the script for good practice
// This code captures dynamic user inputs and fixes their values in const variables

const grid = document.getElementById("pixelCanvas");
const rows = document.getElementById("inputHeight");
const columns = document.getElementById("inputWidth");
const colour = document.getElementById("colorPicker");
const form = document.getElementById("sizePicker");

function makeGrid(rows, columns) {
    // A nested loop is required to build the rows and cells requested
    // When the function is first called it clears the previous grid
    grid.innerHTML=""
    for (a = 0; a < rows.value; a++) {
      let row = grid.insertRow(0);
      for (b = 0; b < columns.value; b++) {
        let cell = row.insertCell(0);
      }
    }
};

// A reset function is included as an option to clear the grid

function reset () {
  // Note that 'reset' button was added to the html file
    form.addEventListener('reset', function () {
        grid.innerHTML=""
    })
};

// calls makeGrid when grid size is submitted by the user

function pixelMaker () {
  // The submit and click event listeners added to a function to refactor code
    form.addEventListener('submit', function (event) {
        reset();
        event.preventDefault();
        makeGrid(rows, columns)
    });

    // Listens for the target cell to enable the user to colour specific cells only

    grid.addEventListener('click', function (event) {
        if (event.target.nodeName === 'TD') {
          event.target.style.backgroundColor = colour.value;
        }
    })
}

// A single function is then called to run the programme
pixelMaker ();
