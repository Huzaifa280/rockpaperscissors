let userinput;
let computerinput;


$(".rock").click(function() {
  $(".userChoice").text("Rock")
  let computerNumber;
computerNumber = Math.random() * 3;
computerNumber = Math.ceil(computerNumber);
  if (computerNumber === 1) {
        $(".computerChoice").text("rock");}
    else if (computerNumber === 2) {
      $(".computerChoice").text("paper");}
    else if  (computerNumber === 3) {
        $(".computerChoice").text("scissor");}
  if (computerinput === 1 && userinput === 'rock') {
        $(".result").text("It’s a tie!");
          } else if (computerinput === 1 && userinput === 'paper') {
        $(".result").text("Paper Wins"); }
            else if (computerinput === 1 && userinput === 'scissors') {
        $(".result").text("Rock Wins"); }
            
});


$(".paper").click(function() {
  $(".userChoice").text("Paper")
  let computerNumber;
computerNumber = Math.random() * 3;
computerNumber = Math.ceil(computerNumber);
  if (computerNumber === 1) {
        $(".computerNumber").text("paper"); }
  if (computerNumber === 1) {
        $(".computerChoice").text("rock");}
    else if (computerNumber === 2) {
      $(".computerChoice").text("paper");}
    else if  (computerNumber === 3) {
        $(".computerChoice").text("scissor");}
});


$(".scissor").click(function() {
  $(".userChoice").text("Scissor")
let computerNumber;
computerNumber = Math.random() * 3;
computerNumber = Math.ceil(computerNumber);
  if (computerNumber === 1) {
        $(".computerNumber").text("scissor");}
  if (computerNumber === 1) {
        $(".computerChoice").text("rock");}
    else if (computerNumber === 2) {
      $(".computerChoice").text("paper");}
    else if  (computerNumber === 3) {
        $(".computerChoice").text("scissor");}
});

