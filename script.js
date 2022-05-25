const paleteColor = document.getElementsByClassName('color');
for (let i = 0; i < paleteColor.length; i +=1) {
  paleteColor[i].addEventListener('click', selectedColor);
}
function selectedColor (event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
