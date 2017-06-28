/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, gameActive;

init();

document.querySelector('.btn-roll').addEventListener('click',rollDice);
document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-hold').addEventListener('click', holdButton);

function rollDice() {
    // random number
    let dice = Math.ceil(Math.random() * 6)

    //display result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // update the round score if the rolled number is not a 1
    if (dice !== 1) {
      roundScore += dice
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  
};
function holdButton() {
  // Add current score to global score
  scores[activePlayer] += roundScore;

  // Update UI
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  
  // check if player won

  if (scores[activePlayer] >= 100 ) {
    window.alert(`Player ${activePlayer + 1} wins!`)
    init();
  } 

  // Onto the other Player
  nextPlayer();

};
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
};
function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
};