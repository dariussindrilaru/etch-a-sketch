let rows = 16;
let columns = 16;
let gridSize = 750;

const changeSize = document.querySelector('.change-size');
const container = document.querySelector('#container');
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

function createGrid() {
    container.textContent = '';
    for (let i = 0; i < (rows * columns); i++) {
        const gridBox = document.createElement('div');

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

changeSize.addEventListener('click', () => {
    let userSize = Number(prompt('Enter a number of squares per side for the new grid (up to 100):'));
    if (userSize > 0 && userSize <= 100) {
        rows = userSize;
        columns = userSize;
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }

    createGrid();
});