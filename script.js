/*
algoritma
1. bilgisayarın seçimlerini ayarla ve bir seçim seçmesini sağla
2. bir round başlat ve kimin kazandığını yazdır
3. bunun 5 round boyunca devam etmesini sağla*/
//computer Play
function computerPlay(){
  let computer_choices = ["Rock","Paper","Scissors"]; 
  let random_choice =computer_choices[Math.floor(Math.random()*computer_choices.length)] 
  return random_choice;
}
console.log(computerPlay())
//Play round
function playRound(playerSelection,computerSelection){
  //draw
  if (playerSelection===computerSelection){
    console.log("Draw");
  }
  //player win
  else if ((playerSelection =="Rock" && computerSelection=="Scissors")||(playerSelection =="Paper" && computerSelection =="Rock") ||( playerSelection=="Scissors"&& computerSelection=="Paper") ) {
    console.log ("player win");
  }
  //computer win
  else if ((playerSelection=="Scissors"&& computerSelection=="Rock") ||( playerSelection=="Paper"&& computerSelection=="Rock" )|| (playerSelection=="Scissors"&& computerSelection=="Paper")){
    console.log("computer win");
  }
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