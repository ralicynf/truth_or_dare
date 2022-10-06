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

addPlayerButton.addEventListener('click', enterPlayer)
startGameButton.addEventListener("click", startGame)
truthBtn.addEventListener('click', truth)
dareBtn.addEventListener('click', dare)
completeBtn.addEventListener('click', completed)
forfeitBtn.addEventListener('click', forfeit)
thankYouNext.addEventListener('click', nextTurn)


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
    "What's the meanest thing you've ever said to someone else?",
    "Who was your worst kiss ever?",
    "What's one thing you'd do if you knew there no consequences?",
    "What's the craziest thing you've done in front of a mirror?",
    "What's the meanest thing you've ever said about someone else?",
    "What's something you love to do with your friends that you'd never do in front of your partner?",
    "Who are you most jealous of?",
    "What do your favorite pijamas look like?",
    "Have you ever faked sick to get out of a party?",
    "Who's the oldest person you've dated?",
    "How many selfies do you take a day?",
    "Meatloaf says he'd do anything for love, but he won't do “that.” What's your “that?”",
    "How many times a week do you wear the same pants?",
    "Would you date your high school crush today?",
    "Do you believe in any superstitions? If so, which ones?",
    "What's one movie you're embarrassed to admit you enjoy?",
    "What's your most embarrassing grooming habit?",
    "When's the last time you apologized? What for?",
    "Where do most of your embarrassing odors come from?",
    "Have you ever considered cheating on a partner?",
    "Have you ever cheated on a partner?",
    "Boxers or briefs?",
    "Have you ever peed in a pool?",
    "What's the weirdest place you've ever grown hair?",
    "If you were guaranteed to never get caught, who on Earth would you murder?",
    "What's the cheapest gift you've ever gotten for someone else?",
    "What app do you waste the most time on?",
    "What's the weirdest thing you've done on a plane?",
    "Have you ever been nude in public?",
    "What is the youngest age partner you'd date?",
    "Have you ever picked your nose in public?",
    "Have you ever lied about your age?",
    "If you had to delete one app from your phone, which one would it be?",
    "What's your most embarrassing late night purchase?",
    "What's the longest you've gone without showering?",
    "Have you ever used a fake ID?",
    "Which of your family members annoys you the most and why?",
    "What is your greatest fear in a relationship?",
    "What's the most embarrassing text in your phone right now?",
    "What celebrity do you think is overrated?",
    "Have you ever lied to your boss/teacher?",
    "Have you ever stolen something from work/school?",
    "What's the longest you've gone without brushing your teeth?",
    "What's your biggest regret in life?",
    "Have you ever regifted a present?",
    "Would you break up with your partner for $1 million?",
    "Have you ever had a crush on a coworker/colleague?",
    "Do you still have feelings for any of your exes?",
    "What's the smallest tip you've ever left at a restaurant?",
    "Have you ever regretted something you did to get a crush or partner's attention?",
    "What's one job you could never do?",
    "Have you ever ghosted a friend?",
    "Have you ever ghosted a partner?",
    "What's the most scandalous photo in your cloud?",
    "If you switched genders for a day, what would you do?",
    "How many photo editing apps do you have on your phone?",
    "How many pairs of granny panties do you own?",
    "When's the last time you got dumped?",
    "What's the most childish thing you still do?",
    "When's the last time you dumped someone?",
    "If you had to pick someone in this room to be your partner on a game show, who would it be and why?",
    "Would you date someone shorter than you?",
    "Have you ever lied for a friend?",
    "Name one thing you'd change about every person in this room.",
    "When's the last time you made someone else cry?",
    "What's the most embarrassing thing you've done in front of a crowd?",
    "If you could become invisible, what's the worst thing you'd do?",
    "After you've dropped a piece of food, what's the longest time you've left it on the floor before eating it?",
    "What's one thing in your life you wish you could change?",
    "What was the greatest day of your life?",
    "What's one useless skill you'd love to learn anyway?",
    "If I went through your cabinets, what's the weirdest thing I'd find?",
    "Have you ever farted and blamed it on someone else?",
    "What's the worst thing you've ever done at work?",
    "How many people have you kissed?",
    "Have you ever gotten mad at a friend for posting an unflattering picture of you?",
    "What's your most absurd dealbreaker?",
    "Who in this room would you list as your emergency contact?",
    "What's something you would die if your mom found out about?",
    "What's the scariest thing that's ever happened to you?",
    "If you could set anyone here up with your best friend, who would it be and why?",
    "How often do you wash your sheets?",
    "Have you ever farted in an elevator?",
    "Who was your first love?",
    "What's the last purchase you regretted?",
    "What's the weirdest dream you've ever had?",
    "If you had one week to live and you had to marry someone in this room, who would it be?",
    "What's the last movie that made you cry?",
    "List one positive and one negative thing about everyone in the room.",
    "When was your first time?",
    "Who was your first?",
    "What's the most sinful thing you've done in a house of worship?",
    "When's the last time you cried and why?",
    "Has anyone ever walked in on you in the bathroom?",
    "Who in this group would you want to swap lives with for a week?",
    "What's your biggest fear today?",
    "What's the most embarrassing thing your parents have caught you doing?",
    "Name a band you only pretend to like.",
    "What's the last song that made you cry?",
    "What's the last thing you Googled?",
    "What is that one thing you would never do for all the money in the world?",
    "Who is your favorite person in your immediate family?",
    "If you could only hear one song for the rest of your life, what would it be?",
    "When's the last time your partner embarrassed you?",
    "What's the last YouTube video you watched?",
    "When's the last time you peed your pants?",
    "Who in this room would be your one phone call if you were in jail?",
    "Who do you most often text on the toilet?",
    "What's the craziest thing you've ever done in a movie theater?",
    "What's the craziest thing that has happened to you in a mall?",
    "How long was your longest relationship?",
    "What's your biggest insecurity?",
    "Have you ever been arrested?",
    "Who's the most surprising person to ever slide into your DMs?",
    "Where's one place you're dying to visit?",
    "What word do you hate the most?",
    "What's the most embarrassing thing you've ever posted on social media?",
    "If you could hire someone to do one thing for you, what would it be?",
    "Have you ever lied on your resume?",
    "What's the best lie you've ever told anyone?",
    "Who's the last person you lurked on social media?",
    "What's your most embarrassing childhood memory?",
    "Have you ever pretended to not get a text to get out of doing something?",
    "What's the weirdest thing you've ever done in a bathroom?",
    "Do you have any hidden talents? What are they?",
    "When's the last time you got caught in a lie?",
    "Have you ever been in a fight?",
    "Would you marry someone rich even if you weren't in love with them?",
    "Have you ever been caught checking someone out?",
    "What's the worst advice you've ever given someone else?",
    "What's the worst advice someone else has ever given you?",
    "Would you volunteer as tribute for anyone in this room in The Hunger Games?",
    "Is there an ex with whom you'd consider reconciling?",
    "What's the weirdest thing you do while driving?",
    "Who's the last person who called you?",
    "When's the last time you wanted to hit somebody?",
    "What's the grossest smell that you secretly enjoy?",    
    "What's the biggest prank you've ever played on someone?",
    "What's one thing about your partner that you find least attractive?",
    "When was the last time you were really angry? Why?",
    "What's your least favorite memory from school?",
    "What's the grossest thing that you do alone?",
    "Have you ever intentionally sabotaged a coworker?",
    "What's your favorite guilty pleasure song?",
    "Would you ever get plastic surgery?",
    "Have you ever had a near-death experience?",
    "What's a skill you wish you had?",
    "Have you ever compromised your morals for money? How?",
    "Who was the last person you said, “I love you” to?",
    "What was your first heartbreak?",
    "Have you ever broken someone's heart?",
    "Have you ever peed in the shower?",
    "When and where was your first kiss? Who was it with?",
    "Do you think cheating can ever be justified? How?",
    "Have you ever thrown up in public?",
    "When's the last time you got rejected?",
    "What's the most common misconception about you?",
    "Have you ever seriously injured another person?",
    "When did you stop believing in Santa Claus?",
    "What's one responsibility you wish you didn't have?",
    "Who is the best kisser you've ever had?",
    "What's the scariest thing you've ever done?",
    "Have you ever had a paranormal experience?",
    "Have you ever gotten blackout drunk?",
    "Do you believe in aliens?",
    "What's the pettiest thing you've ever done?",
    "What's something you've done that you still feel guilty about?",
    "What is the worst date you've ever been on?",
    "Do you secretly dislike any of your friends' kids?"
  ]
  
const dareQuestions = [
    'Do freestyle rap for 1 minute about the other participants.',
    'Do an impression of another player until someone can figure out who it is.',
    'Dance with no music for 1 minute.',
    'Let the person on your right draw on your face.',
    'Give your phone to another player who can send one text saying anything they want to one of your contacts.',
    'Drink lemon juice (if you don\'t have lemon juice, try pickle juice).',
    'Crack an egg on your head.',
    'Swap clothes with someone of the opposite sex for 2 rounds.',
    "Burp the alphabet.",
    "Talk in a Jamaican accent until your next turn.",
    "Call a friend, pretend it’s their birthday, and sing “Happy Birthday” to them.",
    "Perform ballet for 1 minute.",
    "End each sentence with the word “not” until your next turn.",
    "Name a famous person that looks like each player.",
    "Dance like your life depends on it.",
    "Eat a packet of hot sauce or ketchup straight.",
    "Pour ice down your pants.", 
    "Spin around 12 times and try to walk straight.",
    "Put on a blindfold and touch the other players’ faces until you can figure out who it is.",    
    "Let the player to your right redo your makeup (if you aren't wearing any, let them put makeup on you).",
    "Pretend to be a squirrel until your next turn.",
    "Dump a bucket of cold water on your head.",
    "Lick a bar of soap.",
    "Eat a teaspoon of mustard.",
    "Talk without closing your mouth.",
    "You have 5 minutes to write a country song and perform it.",
    "Let someone paint your nails any way they want.",
    "Do 2 minutes of stand-up comedy.",
    "Quack like a duck until your next turn.",
    "Sing the national anthem in a British accent.",
    "Do a free-style rap for the next minute.",
    "Let another person post a status on your behalf.",
    "Hand over your phone to another player who can send a single text saying anything they want to anyone they want.",
    "Let the other players go through your phone for one minute.",
    "Do an impression of another player until someone can figure out who it is.",
    "Say pickles at the end of every sentence you say until it's your turn again.",
    "Imitate a YouTube star until another player guesses who you're portraying.",
    "Act like a chicken until your next turn.",
    "Talk in a British accent until your next turn.",
    "Serenade the person to your right for a full minute.",
    "Do 20 squats.",
    "Dump out your purse, backpack, or pockets and do a show and tell of what's inside.",
    "Prank call one of your family members.",
    "Do a plank for a full minute.",
    "Put five ice cubes in your mouth (you can't chew them, just let them melt).",
    "Bark like a dog until your next turn.",
    "Play your best air guitar for one minute.",
    "This dare is your free pass: click completed and take those points!",
    "Put your head under the shower and get your hair wet.",
    "Lay on the floor and act like a sizzling piece of bacon.", 
    "Lick a bar of soap.", 
    "Post the oldest selfie on your phone to social media stories and leave it up.",
    "Do a karaoke song of the group's choosing.",
    "Post a photo (any photo) on social media with a heartfelt dedication to a celebrity of the group's choosing.",
    "Wear another player's socks like gloves for the next five minutes.",
    "Do 50 squats.",
    "Show the group your instagram DMs.",
    "Put 10 different available liquids into a cup and drink it.",
    "Close your eyes until it's your turn again.",
    "Stand up and try to break dance.",
    "Try to lick your elbow until it's your turn again.",
    "Speak in an accent chosen by another player for the rest of the game.",
    "Pick out the best and worst dressed individuals in the group.",
    "Read the last thing you texted your best friend out loud.",
    "Pass your phone to the person on your right and allow them to post any one thing on your social media accounts.",
    "Let someone go though your browser history and read it aloud.",
    "Let someone go through your Amazon purchase history and read it to the group.",
    "Let someone go through your Youtube history and read it out to the group.",
    "Let someone go through your liked Tik Tok's and show a few of them to the group."
  ]