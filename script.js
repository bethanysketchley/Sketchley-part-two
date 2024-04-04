
let userName = prompt("Welcome to Bethany's Mini Golf! What is your name?");
let numHoles = parseInt(prompt("Hi " + userName + "!" + " How many holes would you like to play? (3 or 6)"));


let totalPutts = 0;
const coursePar = numHoles * 3;


for (let i = 1; i <= numHoles; i++) {
  const holePutts = parseInt(prompt(`Enter the number of putts for Hole ${i}:`));
  totalPutts += holePutts;
}

const golferPar = totalPutts - coursePar;

let message;
if (golferPar > 0) {
  message = `Nice try, ${userName}... Your total par was: +${golferPar}.`;
} else if (golferPar < 0) {
  message = `Great job, ${userName}! Your total par was: ${golferPar}.`;
} else {
  message = `Good game, ${userName}. Your total par was: 0.`;
}


console.log(message);
