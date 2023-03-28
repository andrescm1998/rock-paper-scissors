let userScore = 0
let rivalScore = 0
let options = ['rock','paper','scissors']

function checkWinner(userChoice,rivalChoice){
    if (userChoice == rivalChoice){
        result.innerText = 'It\'s a draw'
    }
    else if (userChoice == 'rock' && rivalChoice == 'paper'){
        rivalScore += 1
        result.innerText = "Rival wins"
    }
    else if (userChoice == 'rock' && rivalChoice == 'scissors'){
        userScore += 1
        result.innerText = "You win"
    }
    else if (userChoice == 'paper' && rivalChoice == 'scissors'){
        rivalScore += 1
        result.innerText = "Rival wins"
    }
    else if (userChoice == 'paper' && rivalChoice == 'rock'){
        userScore += 1
        result.innerText = "You win"
    }
    else if (userChoice == 'scissors' && rivalChoice == 'paper'){
        userScore += 1
        result.innerText = "You win"
    }
    else if (userChoice == 'scissors' && rivalChoice == 'rock'){
        rivalScore += 1
        result.innerText = "Rival wins"
    }

    userScoreDisplay.innerText = 'Your score: ' + userScore
    rivalScoreDisplay.innerText = 'Rival score: ' + rivalScore
}

const userOptions = document.querySelectorAll('.player-choice')
const result = document.getElementById('result')
const userScoreDisplay = document.getElementById('user-score')
const rivalScoreDisplay = document.getElementById('rival-score')
userScoreDisplay.innerText = 'Your score: ' + userScore
rivalScoreDisplay.innerText = 'Rival score: ' + rivalScore

for (const option of userOptions){
    
    option.addEventListener('click',(e) =>{
        const rivalChoice = options[Math.floor(Math.random()*options.length)]
        console.log(rivalChoice)
        checkWinner(e.target.id,rivalChoice)
    })
}




