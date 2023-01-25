let playerChoice;
let computerChoice;
let playedRounds = 0;
let playerScore = 0;
let computerScore = 0;

const modal = document.getElementById("modalPlayAgain");
const btn = document.querySelectorAll('button');

btn.forEach(function(button) {    
    button.addEventListener("click", playRounds);     
});

function playRounds(){
    if(this.value == 'play-again'){
        location.reload();
        return;
    }

        if(playerScore < 5 && computerScore < 5){
        computerChoice = computerSelection();
        playerChoice = this.value;        
        setSign(playerChoice, computerChoice);

            if(playerChoice === computerChoice){
                playedRounds -= 1;
                document.getElementById('results').innerText = 'Tied!';
                document.getElementById('results-description').innerText = `Tied`;
                //Chances of player winning
            }else if(playerChoice === 'rock' && computerChoice === 'scissor' || 
            playerChoice === 'paper' && computerChoice === 'rock' ||
            playerChoice === 'scissor' && computerChoice === 'paper'){
    
                playerScore ++;
                document.getElementById('player-score').innerText = `${playerScore}`;
                document.getElementById('computer-score').innerText = `${computerScore}`;
                document.getElementById('results').innerText = `You Won`;
                document.getElementById('results-description').innerText = `${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
                document.getElementById('play-again').innerText = `You Won!`;                

            }else{
                computerScore ++;
                document.getElementById('player-score').innerText = `${playerScore}`;
                document.getElementById('computer-score').innerText = `${computerScore}`;
                document.getElementById('results').innerText = `You Lost`;
                document.getElementById('results-description').innerText = `${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
                document.getElementById('play-again').innerText = `You Lost!`;
            }

            if(playerScore == 5){
                modal.style.display = "block";
            }else if (computerScore == 5){
                modal.style.display = "block";
            }

        }else{
            modal.style.display = "block";
        }
}

function computerSelection(){
    const selections = ["rock","paper","scissor"];
    const randomSelection = Math.floor(Math.random() * selections.length);
    return selections[randomSelection];
}

function setSign(playerSign, computerSign){
    if(playerSign === 'rock'){ //&#x1F44A Rock &#x270B Paper &#x1F594 Scissor
        document.getElementById('player-sign').innerText = String.fromCodePoint(0x1F44A);
    }else if(playerSign === 'paper'){
        document.getElementById('player-sign').innerText = String.fromCodePoint(0x270B);
    }else if(playerSign === 'scissor'){
        document.getElementById('player-sign').innerText = String.fromCodePoint(0x1F594);
    }else{
        document.getElementById('player-sign').innerText = String.fromCodePoint(0x1F914);
    }

    if(computerSign === 'rock'){ //&#x1F44A Rock &#x270B Paper &#x1F594 Scissor
        document.getElementById('computer-sign').innerText = String.fromCodePoint(0x1F44A);
    }else if(computerSign === 'paper'){
        document.getElementById('computer-sign').innerText = String.fromCodePoint(0x270B);
    }else if(computerSign === 'scissor'){
        document.getElementById('computer-sign').innerText = String.fromCodePoint(0x1F594);
    }else{
        document.getElementById('computer-sign').innerText = String.fromCodePoint(0x1F914);
    }
} 

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}