let playerChoice;
let computerChoice;


playerChoice = prompt("Please Enter Your Choice (Rock, Paper or Scissor").toLowerCase();

function computerSelection(){
    const selections = ["rock","paper","scissor"];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}

computerChoice = computerSelection();
console.log(`${playerChoice} ${computerChoice}`);