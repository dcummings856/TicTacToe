const gameBoardContainer = document.querySelector('.game-board-container');
const startBtn = document.querySelector('.start-btn');
const playersForm = document.querySelector('.players-form');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
let winnerContainer = document.querySelector('.winner-container');
let playerOne = 'X';
let playerTwo = 'O';

const Players = (name) => {
  return { name };
};

/*button functions*/
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  playersForm.style.display = 'grid';
});

const playerSubmit = () => {
  const playerOneName = document.getElementById('player-one').value;
  const playerTwoName = document.getElementById('player-two').value;

  let playerOne = Players(playerOneName);
  let playerTwo = Players(playerTwoName);

  console.log(playerOne);
  console.log(playerTwo);  

  playersForm.style.display = 'none';
  gameBoardContainer.style.display = 'grid';
  resetBtn.style.display = 'block';

  game();
};

submitBtn.addEventListener('click', playerSubmit);


resetBtn.addEventListener('click', () => {
	location.reload()
})


/*gameboard setup*/
const gameBoard = (() => {
  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement('div');
    cell.id = `${i}`;
    cell.className = 'cell';
    gameBoardContainer.append(cell);
  }
})();

/*gameplay function*/
const game = () => {


let playerTurn = playerOne;
let count = 0;
let winner = null;

let winCondition = () => {
			if (document.getElementById('1').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && 
  document.getElementById('3').innerHTML === 'X') {
				winner = playerOne;
			} else if (document.getElementById('4').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && 
  document.getElementById('6').innerHTML === 'X') {
				winner = playerOne;
			} else if ((document.getElementById('7').innerHTML === 'X' && document.getElementById('8').innerHTML === 'X' && 
  document.getElementById('9').innerHTML === 'X')) {
        winner = playerOne;
      } else if (document.getElementById('1').innerHTML === 'X' && document.getElementById('4').innerHTML === 'X' && 
  document.getElementById('7').innerHTML === 'X') {
        winner = playerOne;
      } else if (document.getElementById('2').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && 
  document.getElementById('8').innerHTML === 'X') {
        winner = playerOne;
      } else if (document.getElementById('3').innerHTML === 'X' && document.getElementById('6').innerHTML === 'X' && 
  document.getElementById('9').innerHTML === 'X') {
        winner = playerOne;
      } else if (document.getElementById('1').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && 
  document.getElementById('9').innerHTML === 'X') {
        winner = playerOne;
      } else if (document.getElementById('3').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && 
  document.getElementById('7').innerHTML === 'X') {
        winner = playerOne;
      } else if (document.getElementById('1').innerHTML === 'O' && document.getElementById('2').innerHTML === 'O' && 
  document.getElementById('3').innerHTML === 'O') {
				winner = playerTwo;
			} else if (document.getElementById('4').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && 
  document.getElementById('6').innerHTML === 'O') {
				winner = playerTwo;
			} else if ((document.getElementById('7').innerHTML === 'O' && document.getElementById('8').innerHTML === 'O' && 
  document.getElementById('9').innerHTML === 'O')) {
        winner = playerTwo;
      } else if (document.getElementById('1').innerHTML === 'O' && document.getElementById('4').innerHTML === 'O' && 
  document.getElementById('7').innerHTML === 'O') {
        winner = playerTwo;
      } else if (document.getElementById('2').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && 
  document.getElementById('8').innerHTML === 'O') {
        winner = playerTwo;
      } else if (document.getElementById('3').innerHTML === 'O' && document.getElementById('6').innerHTML === 'O' && 
  document.getElementById('9').innerHTML === 'O') {
        winner = playerTwo;
      } else if (document.getElementById('1').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && 
  document.getElementById('9').innerHTML === 'O') {
        winner = playerTwo;
      } else if (document.getElementById('3').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && 
  document.getElementById('7').innerHTML === 'O') {
        winner = playerTwo;
      }

		if (winner !== null) {
			winnerContainer.innerText = `${winner} is the winner!`
    }

    if (count === 9 && winner === null) {
      winnerContainer.innerHTML = 'It\'s a Draw.'
    }
	}


const changeCell = () => {
  let cells = document.querySelectorAll('.cell');

  cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
      if (cell.innerHTML === '' && count < 9 && winner === null) {
      if (playerTurn === playerOne) {
        playerTurn = playerTwo;
      } else if (playerTurn === playerTwo) {
        playerTurn = playerOne;
      }
      e.target.innerText = playerTurn;
      count++;
      winCondition();
      }
    })
  })
};

changeCell();

};
