let rows = 16;
let columns = 16;
let gridSize = 600;
const container = document.querySelector('#container');
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;


function createGrid() {
    for (let i = 0; i < (rows * columns); i++) {
        const gridBox = document.createElement('div');
        // gridBox.textContent = i + 1;

        gridBox.style.width = `${gridSize / columns}px`;
        gridBox.style.height = `${gridSize / rows}px`;
        gridBox.classList.add('grid-box');

        container.appendChild(gridBox);

        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black';
        });
    }
}

createGrid();