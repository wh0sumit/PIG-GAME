document.querySelector('.start-game').addEventListener('click', startGame);

var player2Name;
var player1Name;
var winningScore;

window.onload = function (e) {
    startGame();
    alert("Rules-1: Roll once and hold it to transfer the next chance to another player");
    alert("Rule - 2: If there is a one in dice then the chance will automatically go to the next player ");
}

function startGame() {

    getPlayer1name();

    function getPlayer1name() {
        var person1 = prompt("Enter Your Name:", "Player-1");
        if (person1 == null || person1 == "") {
            getPlayer1name();
        } else {
            getPlayer2name();
            player1Name = person1;
            document.querySelector('#name-0').textContent = player1Name;
        }

    }


    function getPlayer2name() {

        var person2 = prompt("Enter Your Name:", "Player-2");
        if (person2 == null || person2 == "") {
            getPlayer2name();
        } else {
            player2Name = person2;
            finalScore();
            document.querySelector('#name-1').textContent = player2Name;

        }

    }

    function finalScore() {

        var setScore = prompt("Set Winning Score:", "10");
        setScore = parseInt(setScore);
        console.log(setScore);
        if (isNaN(setScore)) {
            alert("Must input number in Winning Score");
            finalScore();
        }
        console.log(typeof (setScore));
        if (setScore == null || setScore == "") {
            finalScore();
        } else {
            winningScore = setScore;
        }

    }

}



var scores, roundScore, activePlayer;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'Dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {

        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] > winningScore) {
        document.querySelector('#name-' + activePlayer).innerHTML = 'Winner! 🏆';
        document.querySelector('#name-' + activePlayer).style.color = "green";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('winner');
}

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.btn-roll').style.display = 'inline';
    document.querySelector('.btn-hold').style.display = 'inline';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player-1';
    document.getElementById('name-1').textContent = 'player-2';
    document.querySelector('#name-0').style.color = "black";
    document.querySelector('#name-1').style.color = "black";
}
