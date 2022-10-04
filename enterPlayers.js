console.log('player page')

// let playerOne = ''
// let playerTwo = ''
// let playerThree = ''
// let playerFour = ''
const addPlayerButton = document.getElementById('enterPlayerButton')
let players = []

addPlayerButton.addEventListener('click', function () {
  let playerOne = document.getElementById('playerUno')
  let playerTwo = document.getElementById('playerDos')
  let playerThree = document.getElementById('playerTres')
  let playerFour = document.getElementById('playerCuatro')

  let newDiv = document.createElement('div')
  let newList = document.createElement('ul')
  let listItem1 = document.createElement('li')
  let listItem2 = document.createElement('li')
  let listItem3 = document.createElement('li')
  let listItem4 = document.createElement('li')

  listItem1.setAttribute('id', 'p1')
  listItem2.setAttribute('id', 'p2')
  listItem3.setAttribute('id', 'p3')
  listItem4.setAttribute('id', 'p4')

  newList.innerText = 'Players:'
  listItem1.innerText = playerOne.value
  listItem2.innerText = playerTwo.value
  listItem3.innerText = playerThree.value
  listItem4.innerText = playerFour.value

  newDiv.appendChild(newList)
  newList.appendChild(listItem1)
  newList.appendChild(listItem2)
  newList.appendChild(listItem3)
  newList.appendChild(listItem4)
  document.querySelector('.playerNames').appendChild(newDiv)

  players.push(playerOne.value)
  players.push(playerTwo.value)
  players.push(playerThree.value)
  players.push(playerFour.value)

  return players
})
console.log(players)
