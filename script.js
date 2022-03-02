const rgbText = document.querySelector('#rgb-color');
const ball = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const array = [];

// A função genereteNumber foi inspirada na função do site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function genereteNumber() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

function colorBalls() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = `rgb${genereteNumber()}`;
    array.push(ball[index].style.backgroundColor);
  }
}
colorBalls();

function colorNumber() {
  const paragraph = array[Math.floor(Math.random() * array.length)];
  rgbText.innerHTML = paragraph.slice(3);
}
colorNumber();

function changeParagraph() {
  if (this.style.backgroundColor !== `rgb${rgbText.innerHTML}`) {
    answer.innerHTML = '';
    answer.innerHTML = 'Errou! Tente novamente!';
  } else {
    answer.innerHTML = '';
    answer.innerHTML = 'Acertou!';
  }
}

function clickBall() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', changeParagraph);
  }
}
clickBall();

function refresh() {
  document.location.reload();
}
resetGame.addEventListener('click', refresh);
