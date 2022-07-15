// getting dom elements
const grid_16 = document.getElementById("16");
const grid_32 = document.getElementById("32");
const grid_64 = document.getElementById("64");
const grid_100 = document.getElementById("100");
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const pickedColor = document.getElementById("color");

const gridContainer = document.getElementById("grid-container");

// default size, pen setting, and color values
let gridSize = 32;
let color = "black"
let penDown = false;

// giving functionality to the size buttons
grid_16.addEventListener('click', () => { 
    gridSize = 16;
    makeGrid();
});
grid_32.addEventListener('click', () => { 
    gridSize = 32;
    makeGrid();
});
grid_64.addEventListener('click', () => { 
    gridSize = 64;
    makeGrid()
});
grid_100.addEventListener('click', () => { 
    gridSize = 100;
    makeGrid();
});

// reset functionality
reset.addEventListener('click', () => { makeGrid(); });

// eraser functionality
eraser.addEventListener('click', () => { color = "white" });

// color functionality
pickedColor.addEventListener('input', () => {
    color = pickedColor.value;
});

// giving a pen up pen down toggle option
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      penDown ? penDown = false : penDown = true;
    }
})

// initalizing the grid
function makeGrid () {
    gridContainer.innerHTML = "";   // resetting any past elements
    // making the right num of rows and cols
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    // adding all of the squares to the grid
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        square.setAttribute('draggable', 'false');
        gridContainer.appendChild(square);
        // functionality to draw on the squares
        square.addEventListener("pointerout", () => {
            // only drawing when the pen has been toggled to down
            penDown ? square.style.backgroundColor = color : null;
        })
    }
}

alert("Press the spacebar to toggle the pen up and down.")
makeGrid();


