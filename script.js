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
 else if ((playerSelection2 =="rock" && computerSelection=="scissors")||(playerSelection2 =="paper" && computerSelection =="Rock") ||( playerSelection2=="scissors"&& computerSelection=="Paper") ) {
  player = player +1;
  console.log(`Player Wins, Player Selection:${playerSelection2} Computer Selection:${computerSelection}`) }
  //computer win
  else if ((computerSelection=="paper"&& playerSelection2==="rock") ||( playerSelection2=="paper"&& computerSelection=="rock" )|| (playerSelection2=="paper"&& computerSelection=="scissors")|| (playerSelection2=="scissors"&& computerSelection=="rock")){
    computer = computer +1;
    console.log(`Computer Wins, Computer Selection :${computerSelection} player selection: ${playerSelection2}`)
  }
}
function game() {

  for (let i = 0; i <5; i++) {
    playRound()  
    if (player===5){
      console.log("Player Wins")
    }
    else if (computer ===5){
      console.log("Computer Wins")
    }
 }
}

//player selection
//computer selection
 
//computer selction
game()