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
  playerSelection = prompt ("Rock,Paper,Scissors")
  //1.harfi al büyük yap diğer harfleri küçük yapıp birleştir
  const playerSelection2= playerSelection.charAt(0) + playerSelection.substring(1).toLowerCase();


  console.log(playerSelection2);
  computerSelection = computerPlay();
  console.log(computerSelection)
  //draw
 if (playerSelection2===computerSelection){
  console.log(`Draw, Player selection: ${playerSelection2} computer selection: ${computerSelection}`) 
  }
  //player win
 else if ((playerSelection2 =="Rock" && computerSelection=="Scissors")||(playerSelection2 =="Paper" && computerSelection =="Rock") ||( playerSelection2=="Scissors"&& computerSelection=="Paper") ) {
  player = player +1;
  console.log(`Player Wins, Player Selection:${playerSelection2} Computer Selection:${computerSelection}`) }
  //computer win
  else if ((computerSelection=="Paper"&& playerSelection2==="Rock") ||( playerSelection2=="Paper"&& computerSelection=="Rock" )|| (playerSelection2=="Paper"&& computerSelection=="Scissors")|| (playerSelection2=="Scissors"&& computerSelection=="Rock")){
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