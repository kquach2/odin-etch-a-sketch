const container = document.querySelector('div');
container.style.width = '750px';
container.style.height = '750px';
let squareDivs = [];
let squareDivContainers = [];

function createGrid(size=16) {
    for (let i = 0; i<size; i++) {
        const newContainer = document.createElement('div');
        newContainer.id = 'squareDivContainer';

        for (let i = 0; i<size; i++) {
            const newDiv = document.createElement('div');
            newContainer.appendChild(newDiv);
            newDiv.style.width = (parseInt(container.style.width.substring(0,container.style.width.indexOf('p'))) / size).toString() + 'px';
            newDiv.style.height = (parseInt(container.style.height.substring(0,container.style.height.indexOf('p'))) / size).toString() + 'px';
        }
        container.appendChild(newContainer);
    }
    squareDivs = document.querySelectorAll('#container div div');
    squareDivContainers = document.querySelectorAll('#squareDivContainer');
    squareDivs.forEach(squareDiv => squareDiv.addEventListener('mouseover', changeColor));
}
function changeColor(e) {
    this.style['background-color'] = 'red';
}

function clearGrid(e) {
    squareDivContainers.forEach(squareDivContainer => container.removeChild(squareDivContainer));
    let newSize = parseInt(prompt("Please enter a new size for your grid"));
    while(newSize > 100){
        newSize = parseInt(prompt("Please enter a smaller size"));
    }
    createGrid(newSize);
}
createGrid();

const button = document.querySelector('button');
button.addEventListener('click',clearGrid);