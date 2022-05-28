const paleteColor = document.getElementsByClassName('color');
const pintarPixels = document.getElementsByClassName('pixel');
const botton = document.getElementById('clear-board');
const quadradoPixel = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
const randomColor1 = document.getElementById('segundaPaleta');
const randomColor2 = document.getElementById('terceiraPaleta');
const randomColor3 = document.getElementById('quartaPaleta');
function generateColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);

  return `rgb(${r}, ${g}, ${b})`;
}
randomColor1.style.backgroundColor = generateColor();
randomColor2.style.backgroundColor = generateColor();
randomColor3.style.backgroundColor = generateColor();

function creatPixels(param) {
  for (let i = 0; i < param; i += 1) {
    const creat = document.createElement('div');
    for (let j = 0; j < param; j += 1) {
      const creatDiv = document.createElement('div');
      creatDiv.classList.add('pixel');
      quadradoPixel.appendChild(creatDiv);
      quadradoPixel.appendChild(creat);
    }
  }
}
creatPixels(5);
function selectedColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let i = 0; i < paleteColor.length; i += 1) {
  paleteColor[i].addEventListener('click', selectedColor);
}
function pintar(event) {
  const alvo = event;
  const vamosPintar = document.querySelector('.selected');
  const test = window.getComputedStyle(vamosPintar).backgroundColor;
  alvo.target.style.backgroundColor = test;
}
function addClickInOPixels() {
  for (let i = 0; i < pintarPixels.length; i += 1) {
    pintarPixels[i].addEventListener('click', pintar);
  }
}
addClickInOPixels();
function generate() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    quadradoPixel.innerHTML = '';
    creatPixels(5);
  } else if (boardSize.value > 50) {
    quadradoPixel.innerHTML = '';
    creatPixels(50);
  } else {
    quadradoPixel.innerHTML = '';
    creatPixels(boardSize.value);
    addClickInOPixels();
  }
}
generateBoard.addEventListener('click', generate);
function clear() {
  const clearAll = document.getElementsByClassName('pixel');
  for (let i = 0; i < clearAll.length; i += 1) {
    clearAll[i].style.backgroundColor = 'white';
  }
}
botton.addEventListener('click', clear);
