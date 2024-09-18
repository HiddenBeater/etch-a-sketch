const container = document.getElementsByClassName("container");

// Add a div
const div = document.createElement('div');
container.appendChild(div);

const gridSide = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector('#sketch-area');
sketchArea.style.width = `${gridSide}`;
sketchArea.style.height = `${gridSide}`;

function createGridCell(){
    for (let i = 0; i < (rows * cols); i++){
            const gridCell = document.createElement('div');

            gridCell.style.width =`(${(gridSide / cols) - 2}px`;
            gridCell.style.height = `(${(gridSide / rows) - 2}px`;
            
    }
}