console.log('Hey whats up hello')
const truthBtn = document.getElementById('truthButton')

const dareBtn = document.getElementById('dareButton')

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

function truth() {
  let truthH1 = document.createElement('h1')

  function getTruth() {
    let randomTruth = Math.floor(Math.random() * truthQuestions.length)
    return (truthH1.innerText = truthQuestions[randomTruth])
  }
  getTruth()

  document.getElementById('questionSpot').appendChild(truthH1)
}

// function dare() {
// }

truthBtn.addEventListener('click', truth)
// //dareButton.addEventListener('click', dare())

// class Player {
//   constructor(name) {
//     this.name = name
//     this.points = 0
//     this.truths = [
//       "What's the last lie you told?",
//       "What was the most embarrassing thing you've ever done on a date?",
//       'Have you ever accidentally hit something (or someone!) with your car?',
//       "Name someone you've pretended to like but actually couldn't stand.",
//       "What's your most bizarre nickname?",
//       "What's been your most physically painful experience?",
//       'What bridges are you glad that you burned?',
//       "What's the craziest thing you've done on public transportation?",
//       'If you met a genie, what would your three wishes be?',
//       'If you could write anyone on Earth in for President of the United States, who would it be and why?',
//       "What's the meanest thing you've ever said to someone else?"
//     ]
//     this.dares = []
//   }
//   getTruth() {
//     let randomTruth = Math.floor(Math.random() * this.truths.length)
//     return this.truths[randomTruth]
//   }
//   givePointsTruth() {
//     if ((completed = true)) {
//       //add 1 point to total
//     } else if ((completed = false)) {
//       //do not add point to player total
//     }
//   }
// }
// const becca = new Player('Becca')
// console.log(becca.getTruth())
