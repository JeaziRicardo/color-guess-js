const rgbText = document.querySelector('#rgb-color');
const balls = document.querySelector('#balls');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const array = [];
let points = 0;
score.innerHTML = `Placar: ${points}`;

// A função genereteNumber foi inspirada na função do site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function genereteNumber() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    balls.appendChild(ball);
  }
}
createBalls();

function colorBalls() {
  const balles = document.querySelectorAll('.ball');
  for (let index = 0; index < balles.length; index += 1) {
    balles[index].style.backgroundColor = `rgb${genereteNumber()}`;
    array.push(balles[index].style.backgroundColor);
  }
}
colorBalls();

function colorNumber() {
  const paragraph = array[Math.floor(Math.random() * array.length)];
  rgbText.innerHTML = paragraph.slice(3);
}
colorNumber();

function changeParagraph(event) {
  if (event.target.style.backgroundColor === `rgb${rgbText.innerHTML}`) {
    answer.innerHTML = '';
    answer.innerHTML = 'Acertou!';
    score.innerHTML = '';
    points += 3;
    score.innerHTML = `Placar: ${points}`;
  } else {
    answer.innerHTML = '';
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function clickBall() {
  const balles = document.querySelectorAll('.ball');
  for (let index = 0; index < balles.length; index += 1) {
    balles[index].addEventListener('click', changeParagraph);
  }
}
clickBall();

function refresh() {
  array.splice(0, array.length);
  rgbText.innerHTML = '';
  balls.innerHTML = '';
  answer.innerHTML = 'Escolha uma cor';
  createBalls();
  colorBalls();
  colorNumber();
  clickBall();
}
resetGame.addEventListener('click', refresh);
