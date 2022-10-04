console.log('player page')

const addPlayerButton = document.getElementById('enterPlayerButton')
let players = []

function clearInput() {
    document.getElementById('playerName').value = ''
}

function enterPlayer() {
  let player = document.getElementById('playerName')
  if (players.length < 4) {
    players.push(player.value)
} else if (players.length >= 4) {
    // let noMore = document.createElement('h2')
    // let section = document.getElementById('mainSection')
    // section.appendChild(noMore)
    // noMore.innerText = "You've reached player limit! Start game!"
    alert(`You've reached player limit! You are ready to play!`)
    console.log('No more players! Start game!')
}
  clearInput()
  return players
}

addPlayerButton.addEventListener('click', enterPlayer)
console.log(players)



