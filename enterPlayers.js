console.log('player page')

const addPlayerButton = document.getElementById('enterPlayerButton')
let players = []

function enterPlayer() {
  let player = document.getElementById('playerName')

  let newDiv = document.createElement('div')
  let newList = document.createElement('ul')
  let listItem = document.createElement('li')

  listItem.setAttribute('class', 'players')
  newList.innerText = 'Players:'
  listItem.innerText = player.value

  newDiv.appendChild(newList)
  newList.appendChild(listItem)

  document.querySelector('.playerNames').appendChild(newDiv)

  players.push(player.value)

  return players
}

addPlayerButton.addEventListener('click', enterPlayer)
console.log(players)

// function addPlayer() {
//   let player = document.getElementById('playerName')
//   let newLi = document.createElement('li')
//   let uL = document.getElementById('playerList')

//   newLi.setAttribute('class', 'players')
//   uL.innerText = 'Players:'
//   newLi.innerText = player.value

//   uL.appendChild(newLi)

//   players.push(player.value)
//   return players
// }

// addPlayerButton.addEventListener('click', addPlayer)
// console.log(players)
