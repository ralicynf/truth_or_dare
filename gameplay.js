const addPlayerButton = document.getElementById('enterPlayerButton')
const startGameButton = document.getElementById('readyPlayButton')
const truthBtn = document.getElementById('truthButton')
const dareBtn = document.getElementById('dareButton')
const completeBtn = document.getElementById('completedButton')
const forfeitBtn = document.getElementById('forfeitButton')
const todButtons = document.getElementById('todOptions')
const conButtons = document.getElementById('completeOrNah')
const playerEntryScreen = document.getElementById('enterPlayerScreen')
const gameboard = document.getElementById('whereToPlay')
const scoreboard = document.getElementById('leaderboard')
const thankYouNext = document.getElementById('nextTurnButton')
const insertQuestion = document.getElementById('insertQuestionHere')
const playerScoreNames = document.getElementById('playerScoreNames')
const playerTurns = document.querySelectorAll('.thePlayers')
const turn = document.getElementById('playerTurn')
let completeClicked; 
let forfeitClicked;
let isDare;
let isTruth;
let players = []
let counter = 0;

function clearInput() {
    document.getElementById('playerName').value = ''
}

function enterPlayer() {
  let player = document.getElementById('playerName')
  if (players.length < 4) {
    players.push(player.value)
} else if (players.length >= 4) {
    let noMore = document.createElement('h2')
    let classPlayers = document.getElementById('mainSection')
    classPlayers.appendChild(noMore)
    noMore.innerText = "You've reached player limit! Start game!"
}
  clearInput()
  return players
}

addPlayerButton.addEventListener('click', enterPlayer)
console.log(players)

function startGame() {
    if (players.length >= 2) {
    playerEntryScreen.style.display = 'none'
    gameboard.style.display = 'inline' 
    } else if (players.length < 2) {
        let addMore = document.createElement('h2')
        let classPlayers = document.getElementById('mainSection')
        classPlayers.appendChild(addMore)
        addMore.innerText = "Must have at least two players!"
    }
    addPlayersScoreboard()
    playerTurn()
}

const truthQuestions = [
  "What's the last lie you told?",
  "What was the most embarrassing thing you've ever done on a date?",
  'Have you ever accidentally hit something (or someone!) with your car?',
  "Name someone you've pretended to like but actually couldn't stand.",
  "What's your most bizarre nickname?",
  "What's been your most physically painful experience?",
  'What bridges are you glad that you burned?',
  "What's the craziest thing you've done on public transportation?",
  'If you met a genie, what would your three wishes be?',
  'If you could write anyone on Earth in for President of the United States, who would it be and why?',
  "What's the meanest thing you've ever said to someone else?"
]

const dareQuestions = [
  'Do freestyle rap for 1 minute about the other participants.',
  'Smell every other players armpits.',
  'Kiss the person to your left.',
  'Do an impression of another player until someone can figure out who it is.',
  'Call your crush.',
  'Dance with no music for 1 minute.',
  'Let the person on your right draw on your face.',
  'Give your phone to another player who can send one text saying anything they want to one of your contacts.',
  'Drink lemon juice.',
  'Crack an egg on our head.',
  'Swap clothes with someone of the opposite sex for 2 rounds.'
]

function switchButtons() {
    truthBtn.style.display = 'none'
    dareBtn.style.display = 'none'
    completeBtn.style.display = 'inline'
    forfeitBtn.style.display = 'inline'
  }

function truth() {
  function getTruth() {
    let randomTruth = Math.floor(Math.random() * truthQuestions.length)
    return (insertQuestion.innerText = truthQuestions[randomTruth])
  }
  getTruth()
  switchButtons()
  isTruth = true;
  console.log(players)
}

function dare() {
  function getDare() {
    let randomDare = Math.floor(Math.random() * dareQuestions.length)
    return (insertQuestion.innerText = dareQuestions[randomDare])
  }
  isDare = true;
  getDare()
  switchButtons()
}

function addPlayersScoreboard() {
    for (i=0; i < players.length; i++) {
        let h3Name = document.createElement('h3')
        let h3Score = document.createElement('h3')
        h3Name.setAttribute('class', 'thePlayers')
        h3Score.setAttribute('class', 'scores')
        playerScoreNames.appendChild(h3Name)
        playerScoreNames.appendChild(h3Score)
        h3Name.innerText = players[i]
        h3Score.innerText = 0
    }
}

function addPoints() {
    const playerScores = document.querySelectorAll('.scores')
    if (isDare === true && completeClicked === true) {
        if (counter === 0) {
            playerScores[0].innerText = parseInt(playerScores[0].innerText) + 3
        } else if (counter === 1) {
            playerScores[1].innerText = parseInt(playerScores[1].innerText) + 3
        } else if (counter === 2) {
            playerScores[2].innerText = parseInt(playerScores[2].innerText) + 3
        } else if (counter === 3) {
            playerScores[3].innerText = parseInt(playerScores[3].innerText) + 3
        }
    } else if (isTruth === true && completeClicked === true) {
        if (counter === 0) {
            playerScores[0].innerText = parseInt(playerScores[0].innerText) + 1
        } else if (counter === 1) {
            playerScores[1].innerText = parseInt(playerScores[1].innerText) + 1
        } else if (counter === 2) {
            playerScores[2].innerText = parseInt(playerScores[2].innerText) + 1
        } else if (counter === 3) {
            playerScores[3].innerText = parseInt(playerScores[3].innerText) + 1
        }
    }
}

function showScoreboard() {
    scoreboard.style.display = 'inline'
    thankYouNext.style.display = 'inline'
}

function removeGameboard() {
    gameboard.style.display = 'none'
    insertQuestion.innerText = ''
}

function welcomeBackGameboard() {
    gameboard.style.display = 'inline'
    truthBtn.style.display = 'inline'
    dareBtn.style.display = 'inline'
    completeBtn.style.display = 'none'
    forfeitBtn.style.display = 'none'
    scoreboard.style.display = 'none'
    thankYouNext.style.display = 'none'
}

function completed() {
    completeClicked = true
    removeGameboard()
    addPoints()
    showScoreboard()

}

function forfeit() {
    forfeitClicked = true
    removeGameboard()
    showScoreboard()
}

function nextTurn() {
    isTrue = false
    isDare = false
    completeClicked = false
    forfeitClicked = false
    counter++
    welcomeBackGameboard()
    resetCounter()
    playerTurn()
    console.log(counter)
}

startGameButton.addEventListener("click", startGame)
truthBtn.addEventListener('click', truth)
dareBtn.addEventListener('click', dare)
completeBtn.addEventListener('click', completed)
forfeitBtn.addEventListener('click', forfeit)
thankYouNext.addEventListener('click', nextTurn)

function playerTurn() {
    if (players.length === 2) {
       if (counter === 0) {
        turn.innerText = (players[0] + `'s Turn!`)
       } else if (counter === 1) {
        turn.innerText = (players[1] + `'s Turn!`)
       }
    } else if (players.length === 3) {
        if (counter === 0) {
            turn.innerText = (players[0] + `'s Turn!`)
        } else if (counter === 1) {
            turn.innerText = (players[1] + `'s Turn!`)
        } else if (counter === 2) {
            turn.innerText = (players[2] + `'s Turn!`)
        }
    } else if (players.length === 4) {
        if (counter === 0) {
            turn.innerText = (players[0] + `'s Turn!`)
        } else if (counter === 1) {
            turn.innerText = (players[1] + `'s Turn!`)
        } else if (counter === 2) {
            turn.innerText = (players[2] + `'s Turn!`)
        } else if (counter === 3) {
            turn.innerText = (players[3] + `'s Turn!`)
        }
    }
}

function resetCounter() {
    if (counter === players.length ) {
        counter = 0
    }
}

//rounds--player 1 goes, player 2 goes, (player 3 and 4 go if there's a player 3 and 4)
//shows score after each turn (or round?)

//if counter = players.length (reset counter)