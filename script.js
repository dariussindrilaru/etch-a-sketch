let rows = 16;
let columns = 16;
const gridSize = 750;

const container = document.querySelector('#container');
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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

const changeSize = document.querySelector('.change-size');
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

const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    container.querySelectorAll('.grid-box').forEach(gridBox => {
        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black';
        });
    });
});

const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => {
    container.querySelectorAll('.grid-box').forEach(gridBox => {
        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = randomColor();
        });
    });
});

const eraserButton = document.querySelector('.eraser');
eraserButton.addEventListener('click', () => {
    container.querySelectorAll('.grid-box').forEach(gridBox => {
        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'white';
        });
    });
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    container.querySelectorAll('.grid-box').forEach(gridBox => {
        gridBox.style.backgroundColor = 'white';
    });
});