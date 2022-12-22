const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#bebebe', '#14e3e0'];

const audioList = ['./f6-102819.mp3', './fa-78409.mp3', './re-78500.mp3', './si-80238.mp3', './sol-101774.mp3']

const SQUARES = 600;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  square.addEventListener('click', () => playAudio());

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomAudio() {
  let num = Math.ceil(Math.random(0) * audioList.length - 1)
  //console.log(num)
  return audioList[num];
}

function playAudio() {
  let audio = new Audio(`${getRandomAudio()}`)

  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
  }
  audio.play();
}