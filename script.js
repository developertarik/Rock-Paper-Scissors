
//Bilgisayarın seçimleri
function computerPlay(){
  let computer_choices = ["Rock","Paper","Scissors"]; 
  let random_choice =computer_choices[Math.floor(Math.random()*computer_choices.length)] 
  return random_choice;
}
console.log(computerPlay())
//kimin kazandığını kontrol
function gameControl(playerSelection,computerSelection){

}
//oyunu kimin kazandığını kontrol
function game() {
  for (let i = 0; i <5; i++) {
    
  }
}
//oyuncu seçimi
const playerSelection = "Rock";
//bilgisayar seçimi
const computerSelection = computerPlay();
console.log(gameControl(playerSelection,computerSelection))