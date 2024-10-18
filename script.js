//create square divs inside grid container
function makeGrids(size) {
  const container = document.querySelector('#container');
  for (let i = 0; i < size; i++) {
    if ((size > 100 || size < 20) && (isNaN = true)) return;
    const col = document.createElement("div");
    col.classList.add("col");

    for (let j = 1; j <= size; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add('square');
      col.appendChild(gridSquare);
      gridSquare.style.border = '1px solid black';
    };
    container.appendChild(col);
  };
};

//removes old squares before applying new size
function removeOldSquares() {
  while ( container.hasChildNodes() ) {
    container.removeChild(container.firstChild);
  };
};

//clears input field
function clearField() {
  const clear = document.querySelector('#size').value='';
};

//size button setup
const sizeButton = document.querySelector('.size');
sizeButton.addEventListener('click', (e) => {
  removeOldSquares();
  //grabs input value from input field
  const userSize = document.querySelector('#size').value;
  makeGrids(userSize);
  clearField();
});

//color the grid
const setColor = document.querySelector('.set-color');
setColor.addEventListener('click', () => {
  let currentColor = document.querySelector('#color-picker').value
  const squares = document.querySelectorAll('.square')
  let length = squares.length
  for (let i = 0; i < length; i++) {
    squares[i].setAttribute('counter', 0);
    squares[i].addEventListener('mouseover', function(e) {
      if(e.buttons == 1) {
        this.style.backgroundColor = currentColor;
      }
    })
  }
});

//Eraser setup
const eraser =  document.querySelector('.eraser');
eraser.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square')
  let length = squares.length
  for (let i = 0; i < length; i++) {
    squares[i].setAttribute('counter', 0);
    squares[i].addEventListener('mouseover', function(e) {
      if(e.buttons == 1) {
        this.style.backgroundColor = 'white';
      }
    })
  }
})




  