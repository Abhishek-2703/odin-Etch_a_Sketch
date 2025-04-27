const container = document.querySelector("#container");
const button = document.getElementById('value');

//number of square needed
function getValue() { 
    let getVal = prompt("Enter the no of sqrs (1 to 100):");
    createGrid(getVal);
}

//adjusting height and width given to the number of squares
function createGrid(squaresPerSide) { 
    container.innerHTML = '';
    const totalSize = 660;
    const squareSize = totalSize / squaresPerSide;
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        if (squaresPerSide <= 100) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }
        else {
            alert("enter number within 100!");
            break;
        }
    }
    changeColor();
}

//color changes when mouse is hovered
function changeColor() {
    const cells = document.querySelectorAll(".square");
    cells.forEach(sdiv => {
        sdiv.addEventListener('mouseenter', () => {
            sdiv.style.backgroundColor = `${getRandomRgb()}`;
        });
    });
}

//random color generated
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}