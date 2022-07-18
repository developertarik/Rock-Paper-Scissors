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
  
  //1.harfi al büyük yap diğer harfleri küçük yapıp birleştir
  computerPlay();
  computerSelection = computerPlay();


  
  console.log(computerSelection)
  
  //draw
 if (playerSelection===computerSelection){
  console.log(`Draw, Player selection: ${playerSelection} computer selection: ${computerSelection}`) 
  }
  //player win
 else if ((playerSelection =="rock" && computerSelection=="scissors")||(playerSelection =="paper" && computerSelection =="rock") ||( playerSelection=="scissors"&& computerSelection=="paper") ) {
  player = player +1;
  console.log(`Player Wins,Player Score ${player} Player Selection:${playerSelection} Computer Selection:${computerSelection}`) }
  //computer win
  else if ((computerSelection=="paper"&& playerSelection==="rock") ||( playerSelection=="paper"&& computerSelection=="rock" )|| (playerSelection=="paper"&& computerSelection=="scissors")|| (playerSelection=="scissors"&& computerSelection=="rock")){
    computer = computer +1;
    console.log(`Computer Wins,Computer Score ${computer} Computer Selection :${computerSelection} player selection: ${playerSelection}`)
  }
}
function game() {
  // bir taraf 5 olunca döngüyü durdur kodu
 }

 const rock = document.querySelector(".rock");
 rock.addEventListener("click",() =>{
    playerSelection ="rock";
    console.log(playerSelection) 
     playRound();

 })
 //paper
 const paper = document.querySelector(".paper");
 paper.addEventListener("click",()=>{
   playerSelection = "paper";
   console.log(playerSelection);
   playRound();

 })
//scissors
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click",()=>{
  playerSelection = "scissors";
  console.log(playerSelection);
  playRound();

})
 //rock

//player selection
//computer selection
 //div 

//computer selction
game()