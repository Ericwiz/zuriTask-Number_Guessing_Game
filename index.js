console.log('welcome to number guessing game')
const username = prompt("What is your name:")
console.log(`welcome ${username}`)

let points = 0;
let stage = 1;
let maxStage = 7;
let randomNum = Math.floor(Math.random() *maxStage) +1;

function randomGuess(range) {
  for(let i = 2; i <= maxStage; i++) {
  let userGuess = parseInt(prompt(`Guess the number between 1 and ${i}`))
  if(userGuess == randomNum) {
    console.log(userGuess)
    points += 1;
    stage += 1;
    console.log(`You have gained ${points} point \n`)
    console.log(`You Entered stage ${stage} \n`)
  } else  {
    console.log("wrong guess")
   console.log('you have total of', points)
  }
  
 }
}

randomGuess(randomNum)