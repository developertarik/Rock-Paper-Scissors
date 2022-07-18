/*
algoritma
1. bilgisayarın seçimlerini ayarla ve bir seçim seçmesini sağla
2. bir round başlat ve kimin kazandığını yazdır
3. bunun 5 round boyunca devam etmesini sağla*/
//computer Play
function computerPlay(){
  let computer_choices = ["rock","paper","scissors"]; 
  let random_choice =computer_choices[Math.floor(Math.random()*computer_choices.length)] 
  return(random_choice);
}
//Play round
//a
let player = 0;
let computer = 0;
function playRound(playerSelection,computerSelection){
  playerSelection = prompt ("rock,paper,scissors")
  //1.harfi al büyük yap diğer harfleri küçük yapıp birleştir
  const playerSelection2=playerSelection.toLowerCase();


  console.log(playerSelection2);
  computerSelection = computerPlay();
  console.log(computerSelection)
  //draw
 if (playerSelection2===computerSelection){
  console.log(`Draw, Player selection: ${playerSelection2} computer selection: ${computerSelection}`) 
  }
  //player win
 else if ((playerSelection2 =="rock" && computerSelection=="scissors")||(playerSelection2 =="paper" && computerSelection =="rock") ||( playerSelection2=="scissors"&& computerSelection=="paper") ) {
  player = player +1;
  console.log(`Player Wins,Player Score ${player} Player Selection:${playerSelection2} Computer Selection:${computerSelection}`) }
  //computer win
  else if ((computerSelection=="paper"&& playerSelection2==="rock") ||( playerSelection2=="paper"&& computerSelection=="rock" )|| (playerSelection2=="paper"&& computerSelection=="scissors")|| (playerSelection2=="scissors"&& computerSelection=="rock")){
    computer = computer +1;
    console.log(`Computer Wins,Computer Score ${computer} Computer Selection :${computerSelection} player selection: ${playerSelection2}`)
  }
}
function game() {
  // bir taraf 5 olunca döngüyü durdur kodu
  playRound();
 }

 //rock
 const rock = document.createElement(".rock");
 rock.addEventListener("click",() =>{
    playerSelection=="rock";
    console.log(playerSelection)
    playRound();
 })
 //paper
 const paper = document.createElement(".paper");
 paper.addEventListener("click",()=>{
   playerSelection == "paper";
   console.log(playerSelection);
   playRound();
 })
//scissors
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click",()=>{
  playerSelection == "scissors";
  console.log(playerSelection);
  playRound();
})
//player selection
//computer selection
 //div 

//computer selction
game()