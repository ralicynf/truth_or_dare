console.log('player page')


let playerOne = ''
let playerTwo = ''
let playerThree = ''
let playerFour = ''
const addPlayerButton = document.getElementById("enterButton")


function addPlayer() {
    let input = document.getElementById("usernames").value;
    playerOne = input; 
    //console.log(playerOne)
}

addPlayerButton.addEventListener('click', addPlayer) 
//     let input = document.getElementById("usernames"); 
//     playerOne = input
//     alert(input)
//     console.log(playerOne)
// })
console.log(playerOne)

