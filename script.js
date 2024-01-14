function getComputerChoice(){
    let rn = Math.floor(Math.random()*3);
    if(rn == 0){
        return 'Rock'
    }else if(rn == 1){
        return 'Paper'
    }else{
        return 'Scissor'
    }
}



function playRound(playerSelection, computerSelection){
    if(((playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") && computerSelection == "Rock") || ((playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") && computerSelection == "Paper") || ((playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISSOR") && computerSelection == "Scissor")){
        return "No one Wins"
    }else if((playerSelection == "rock" || playerSelection == "Rock" || playerSelection == "ROCK") && computerSelection == "Scissor"){
        return "You Win! Rock beats Scissor"
    }else if((playerSelection == "paper" || playerSelection == "Paper" || playerSelection == "PAPER") && computerSelection == "Rock"){
        return "You Win! Paper beats Rock"
    }else if((playerSelection == "scissor" || playerSelection == "Scissor" || playerSelection == "SCISSOR") && computerSelection == "Paper"){
        return "You Win! Scissor beats Paper"
    }else{
        return "You loose"
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(getComputerChoice());
console.log(playRound(playerSelection,computerSelection))