const paleteColor = document.getElementsByClassName('color');
const pintarPixels = document.getElementsByClassName('pixel');
const botton = document.getElementById('clear-board');
for (let i = 0; i < paleteColor.length; i +=1) {
  paleteColor[i].addEventListener('click', selectedColor);
}
function selectedColor (event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let i = 0; i < pintarPixels.length; i +=1) {
  pintarPixels[i].addEventListener('click', pintar)
}
function pintar (event) {
  if (document.querySelector('.selected').innerText === 'Black') {
    event.target.style.backgroundColor = 'black';
  } else if (document.querySelector('.selected').innerText === 'Red') {
    event.target.style.backgroundColor = 'red';
  } else if (document.querySelector('.selected').innerText === 'Blue') {
    event.target.style.backgroundColor = 'blue';
  } else {
    event.target.style.backgroundColor = 'yellow';
  }
}
function clear () {
  const clearAll = document.getElementsByClassName('pixel');
  for (let i = 0; i < clearAll.length; i +=1) {
    clearAll[i].style.backgroundColor = 'white';
  }
}
botton.addEventListener('click', clear);