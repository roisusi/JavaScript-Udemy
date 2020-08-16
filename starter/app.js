/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var scores , roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;





//innerHTML make is as HTML code
//document.querySelector('#current-' + activePlayer).innerHTML = '<h1>' + dice + '</h1>';

//read from element
//var x = document.querySelector('#score-0').textContent;

//change CSS to hide it
document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click',btn);

//element by id - make all values to Zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

function btn(){
    //1. Random number
    var dice = Math.floor(Math.random() * 6 ) +1 ;
    
    //2. Display the result
    //store the selection
    var diceDOM = document.querySelector('.dice');
    // block = disply
    diceDOM.style.display = 'block';
    //The class id
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score and if not rolled 1
    // !== not useing type currention
    if (dice !== 1 ){
        //Add score
        roundScore += dice;
        //select elements from a webpage
        //select things as well as css the first he finds
        //solution for that - ?
        //textContent - change the text;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    else{
        //Next Player
        //tornery operation
        activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //change the classes id
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        //change using toggle
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
    
}

//callback funtion that calls another function - btm
//or write function () { } and write a function instad of btn;

