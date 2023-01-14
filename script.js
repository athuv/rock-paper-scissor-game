let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let playedRounds = 1;
let isValid = true;


function computerSelection(){
    const selections = ["rock","paper","scissor"];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}

function compareSelections() {
    
    computerChoice = computerSelection();
    
    //Round ties
    if(playerChoice === computerChoice){
        console.log(`%c------------------\nRound ${playedRounds}-\nYour Choice: ${playerChoice.toUpperCase()}\nComputer Choice: ${computerChoice.toUpperCase()}\n${playerChoice.toUpperCase()} Ties ${computerChoice.toUpperCase()}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~TIED~~~~~`,'color:brown; font-size: 15px');

       //Chances of player winning
    }else if(playerChoice === 'rock' && computerChoice === 'scissor' || 
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissor' && computerChoice === 'paper') {

        playerScore ++;
        console.log(`%c------------------\nRound ${playedRounds}-\nYour Choice: ${playerChoice.toUpperCase()}\nComputer Choice: ${computerChoice.toUpperCase()}\n${playerChoice.toUpperCase()} Beats ${computerChoice.toUpperCase()}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~YOU WON~~~~~`,'color:green; font-size: 15px');

    }else{

        computerScore ++;
        console.log(`%c------------------\nRound ${playedRounds}-\nYour Choice: ${playerChoice.toUpperCase()}\nComputer Choice: ${computerChoice.toUpperCase()}\n${playerChoice.toUpperCase()} Beats ${computerChoice.toUpperCase()}\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~YOU LOST~~~~~`,'color:red; font-size: 15px');
    }
}

function validatePlayerChoice(){

    if(isValid === true){
        playerChoice = prompt("Please Enter Your Choice - Rock, Paper or Scissor").toLowerCase();
    }else{
        playerChoice = prompt("Wrong Choice! Please Select Any of The Three - Rock, Paper or Scissor").toLowerCase();
    }

    if(playerChoice !== 'rock' && playerChoice !== 'scissor' && playerChoice !== 'paper') {
        isValid = false;
        return false;
    }else {    
        isValid = true;
        return true;
    }
}

function playRounds(){
    for (let i = 1; i <= 5; i++) {
        if(validatePlayerChoice()){
            playedRounds = i;
            compareSelections(); 
            
            if(i == 5){
                console.log(matchWinner());
            }
        }else{
            i--;
        }
    }
}

function matchWinner(){
    if(playerScore > computerScore){
        console.log(`%c------------------\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~YOU WON THE MATCH~~~~~`,'color:green; font-size: 15px');
    }else if(playerScore == computerScore){
        console.log(`%c------------------\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~MATCH TIED~~~~~`,'color:brown; font-size: 15px');
    }else{
        console.log(`%c------------------\nYour Score: ${playerScore}\nComputer Score: ${computerScore}\n~~~~~YOU LOST THE MATCH~~~~~`,'color:red; font-size: 15px');
    }
}

playRounds();