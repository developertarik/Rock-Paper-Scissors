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
const result = document.querySelector("div");
let play = document.getElementsByClassName("reload")
//Play round
//a
let player = 0;
let computer = 0;
function playRound(playerSelection){

  if(player===5){
   result.textContent = "Player wins";
   if( play.style.display ==="none"){
    play.style.display = "block";
   }

  }

  
    

if(computer===5){
  result.textContent="computer Wins!"
  if( play.style.display ==="none"){
    play.style.display = "block";
   }
}
  
  //1.harfi al büyük yap diğer harfleri küçük yapıp birleştir
  computerPlay();
  computerSelection = computerPlay();


  
  
  //draw
 if (playerSelection===computerSelection){
  result.textContent = `Draw, Player selection:${playerSelection} computer selection: ${computerSelection} `;

}
  //player win
 if ((playerSelection =="rock" && computerSelection=="scissors")||(playerSelection =="paper" && computerSelection =="rock") ||( playerSelection=="scissors"&& computerSelection=="paper") ) {
  player = player +1;
  
  result.textContent = `Player Wins,Player Score ${player} Player Selection:${playerSelection} Computer Selection:${computerSelection} `;
  
}
  
  //computer win
  else if ((computerSelection=="paper"&& playerSelection==="rock") ||( playerSelection=="paper"&& computerSelection=="rock" )|| (playerSelection=="paper"&& computerSelection=="scissors")|| (playerSelection=="scissors"&& computerSelection=="rock")){
    computer = computer +1;
    result.textContent = `Computer Wins,Computer Score ${computer} Computer Selection :${computerSelection} player selection: ${playerSelection} `;
    }
}
  function game() {
  // bir taraf 5 olunca döngüyü durdur kodu
  for (let i = 0; i<10; i++) {
    playRound()
    
    
  }
 }

 const rock = document.querySelector(".rock");
 rock.addEventListener("click",(playerSelection) =>{
    playerSelection ="rock";
     playRound(playerSelection);

 })
 //paper
 const paper = document.querySelector(".paper");
 paper.addEventListener("click",(playerSelection)=>{
   playerSelection = "paper";
   playRound(playerSelection);

 })
//scissors
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click",(playerSelection)=>{
  playerSelection = "scissors";
  playRound(playerSelection);

})

//div
 //rock

//player selection
//computer selection
 //div 

//computer selction
game()