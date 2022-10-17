window.onload = function () {
  
  //Gerando cores aleatoriamente
  
  let answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  let colors = document.querySelectorAll('.ball');
  let score = document.getElementById('score');
  let count = 0;
  score.innerText = count;

  function randomColor() {
    let color = [];
    for (let index = 0; index < 3; index += 1) {
      let number = Math.floor(Math.random() * 255);
      color.push(number);
    }
    let rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    return rgbColor;
  }

  function changeColor() {
    let colorForCheck = [];
    answer.innerText = 'Escolha uma cor';
    for (let index = 0; index < colors.length; index += 1) {
      let color = randomColor();
      colors[index].style.backgroundColor = color;
      colorForCheck.push(color);
    }
    rgbChosed(colorForCheck);
    
  }
  changeColor();

  //Validação das cores e Adicionando pontos
   

  function rgbChosed(colorArray) {
    let iValue = document.getElementById('rgb-color');
    let i = Math.floor(Math.random() * 6);
    let color = colorArray[i];
    iValue.innerText = `${color}`;
  }

  document.addEventListener('click', function chosedColor(event) {
    let rgbChosed = document.getElementById('rgb-color');
    let choice = event.target.style.backgroundColor;
    let guess = rgbChosed.innerText;

    if (event.target.classList.contains('ball')){
      if (choice === guess) {
        answer.innerText = 'Acertou!';
        count += 3;
        score.innerText = `${count}`;
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    }
  });

  //Resetando o jogo

  let resetGame = document.querySelector('#reset-game');
  resetGame.addEventListener('click', changeColor);

}