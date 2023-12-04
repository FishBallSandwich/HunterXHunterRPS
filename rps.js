let playScore = 0;
let computerScore = 0;
let ties = 0;

function playGame(playerChoice) {
    let randNum = Math.random();
    let computerMove = '';



    if (randNum >= 0 && randNum < 1 / 3) {
        computerMove = 'Rock';
        console.log(computerMove);
    } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        computerMove = 'Paper';
        console.log(computerMove);

    } else {
        computerMove = 'Scissors';
        console.log(computerMove);
    }

    let result = ''
    if (computerMove === playerChoice) {
        console.log('its a tie');
        console.log(`playScore: ${playScore}, computerScores: ${computerScore}`)
        ties++;
        result = 'its a tie'
    }
    else if ((playerChoice == 'Rock' && computerMove == 'Scissors') ||
        (playerChoice == 'Scissors' && computerMove == 'Paper') ||
        (playerChoice == 'Paper' && computerMove == 'Rock')) {
        console.log('you won');
        alert('you won');
        playScore++;
        console.log(`playScore: ${playScore}, computerScores: ${computerScore}`);
        result = 'you won';

    }
    else {
        console.log('you lost');
        alert('you lost')
        computerScore++;
        console.log(`playScore: ${playScore}, computerScores: ${computerScore}`)
        result = 'you lost'


    }

    document.getElementById('humanScore').textContent = playScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('ties').textContent = ties;
    document.querySelector('.computer-move').innerHTML = `Enemy used ${computerMove}`
    document.querySelector('.player-move').innerHTML = `You used ${playerChoice}`
    document.querySelector('.result').innerHTML = result;

    let resultParagraph = document.querySelector('.result');
    resultParagraph.style.color = getResultColor(result);
}

function getResultColor(result) {

    switch (result) {
        case 'you won':
            return 'green';
        case 'you lost':
            return 'red';
        case 'its a tie':
            return 'yellow';

        default:
            return 'yellow';



    }



}







function resetScore() {

    playScore = 0;
    computerScore = 0;
    ties = 0;
    console.log(`resetting scores. ties ${ties}, computer${computerScore}, human${playScore}`);
    document.getElementById('humanScore').textContent = playScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('ties').textContent = ties;

}

