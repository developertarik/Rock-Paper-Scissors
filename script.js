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
let player = 0;
let computer = 0;
function playRound(playerSelection,computerSelection){
  playerSelection = prompt("Rock, Paper,Scissors?");
  console.log(playerSelection)
  computerSelection = computerPlay();
  console.log(computerSelection)
  //draw
 if (playerSelection===computerSelection){
   console.log( "Draw")
 }
  //player win
 else if ((playerSelection =="Rock" && computerSelection=="Scissors")||(playerSelection =="Paper" && computerSelection =="Rock") ||( playerSelection=="Scissors"&& computerSelection=="Paper") ) {
  player = player +1;
  console.log(`Player wins player now${player}points`)
  console.log( "player win" )
 }
  //computer win
  else if ((computerSelection=="Paper"&& playerSelection==="Rock") ||( playerSelection=="Paper"&& computerSelection=="Rock" )|| (playerSelection=="Paper"&& computerSelection=="Scissors")|| (playerSelection=="Scissors"&& computerSelection=="Rock")){
    computer = computer +1;
  console.log(`Computer wins computer now ${computer}points`)
    console.log( "computerwin");
  }
}
function game() {

  for (let i = 0; i <5; i++) {
    playRound()
 }
}

//player selection
//computer selection
 
//computer selction
game()