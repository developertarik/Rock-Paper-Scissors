
//computer Play
function computerPlay(){
  let computer_choices = ["Rock","Paper","Scissors"]; 
  let random_choice =computer_choices[Math.floor(Math.random()*computer_choices.length)] 
  return random_choice;
}
console.log(computerPlay())
//Play round
function playRound(playerSelection,computerSelection){
  //player lose
  if (playerSelection ==="Rock"&& computerSelection==="Scissors"  ||playerSelection ==="Paper" && computerSelection ==="Rock" || playerSelection==="Scissors"&& computerSelection==="Paper" ) {
    return "player win";
  }
  //computer win
  
  //win
}
//game
function game() {
  for (let i = 0; i <5; i++) {
    
  }
}
//player selection
const playerSelection = prompt("Rock, Paper,Scissors?");
//computer selection
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection))