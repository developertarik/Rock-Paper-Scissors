/*
algoritma
1. bilgisayarın seçimlerini ayarla ve bir seçim seçmesini sağla
2. bir round başlat ve kimin kazandığını yazdır
3. bunun 5 round boyunca devam etmesini sağla*/
//computer Play
function computerPlay(){
  let computer_choices = ["Rock","Paper","Scissors"]; 
  let random_choice =computer_choices[Math.floor(Math.random()*computer_choices.length)] 
  return(random_choice);
}
//Play round
//a
function playRound(playerSelection,computerSelection){
  //draw
 if (playerSelection===computerSelection){
   return "Draw"
 }
  //player win
 else if ((playerSelection =="Rock" && computerSelection=="Scissors")||(playerSelection =="Paper" && computerSelection =="Rock") ||( playerSelection=="Paper"&& computerSelection=="Scissors") ) {
  return "win" 
 }
  //computer win
  else if ((computerSelection=="Paper"&& playerSelection==="Rock") ||( playerSelection=="Paper"&& computerSelection=="Rock" )|| (playerSelection=="Scissors"&& computerSelection=="Paper")){
    return "computerwin";
  }
}

//player selection
const playerSelection = prompt("Rock, Paper,Scissors?");
console.log(playerSelection)
//computer selection
const computerSelection = computerPlay();
console.log(computerSelection)
//computer selction
console.log(playRound(playerSelection,computerSelection))