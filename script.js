const paleteColor = document.getElementsByClassName('color');
const pintarPixels = document.getElementsByClassName('pixel');
const botton = document.getElementById('clear-board');
const quadradoPixel = document.getElementById('pixel-board');
const generateBoard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
function creatPixels(param) {
  for (let i = 0; i < param; i += 1) {
    const creat = document.createElement('div');
    for (let j = 0; j < param; j += 1) {
      const creatDiv = document.createElement('div');
      creatDiv.classList.add('pixel');
      creat.appendChild(creatDiv);
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
  if (document.querySelector('.selected').id === 'primeiraPaleta') {
    alvo.target.style.backgroundColor = 'black';
  } else if (document.querySelector('.selected').id === 'segundaPaleta') {
    alvo.target.style.backgroundColor = 'red';
  } else if (document.querySelector('.selected').id === 'terceiraPaleta') {
    alvo.target.style.backgroundColor = 'blue';
  } else {
    alvo.target.style.backgroundColor = 'yellow';
  }
}
for (let i = 0; i < pintarPixels.length; i += 1) {
  pintarPixels[i].addEventListener('click', pintar);
}
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
    for (let i = 0; i < pintarPixels.length; i += 1) {
      pintarPixels[i].addEventListener('click', pintar);
    }
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
