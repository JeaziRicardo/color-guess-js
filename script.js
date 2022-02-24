const rgbText = document.querySelector('#rgb-color');
const sectionBalls = document.querySelector('#balls');

// As funções genereteNumber e genereteColor foram inspiradas na função do site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function genereteNumber() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  return `(${r}, ${g}, ${b})`;
}

function contentText() {
  rgbText.innerHTML = genereteNumber();
}
contentText();

function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    let ball = document.createElement('div');
    ball.className = 'ball';
    sectionBalls.appendChild(ball);
  }
}
createBalls();
