//GLOBAL VARIABLES
let rock;
let paper;
let scissors;
let array;
let randomValue;
let userChoice;
let computerChoice;
let win;
let loss;
win = 1;
loss = 0;
// GETTING THE VALUE
$("button").click(function(){
    userChoice = $("input").val();
});
// PRINTING VALUE (USER CHOICE)
$("button").click(function(){
    $("#userChoice").text(userChoice);
});
// SETTING UP ARRAY
 array = [
     "Rock",
     "Paper",
     "Scissors"
 ]
 // RANDOM VALUE FROM ARRAY / PRINTING VALUE (COMPUTER CHOICE)
 $("button").click(function(){
    computerChoice = randomValue = array[Math.floor(array.length * Math.random())];
    $("#computerChoice").text(randomValue);
});
// IF ELSE STATEMENTS 
$("button").click(function(){
//  ROCK
    if(userChoice === "Rock" || userChoice === "rock") {
        if(computerChoice === "Rock") {
            $("#result").text("No One Wins!");
        }else if(computerChoice === "Paper") {
            $("#result").text("You Lose!");
        }else if(computerChoice === "Scissors") {
            $("#result").text("You Win");
        }
    }
//  PAPER
    if(userChoice === "Paper" || userChoice === "paper") {
        if(computerChoice === "Paper") {
            $("#result").text("No One Wins!");
        }else if(computerChoice === "Scissors") {
            $("#result").text("You Lose!");
        }else if(computerChoice === "Rock") {
            $("#result").text("You Win");
        }
    }   
//  SCISSORS
    if(userChoice === "Scissors" || userChoice === "scissors") {
        if(computerChoice === "Scissors") {
            $("#result").text("No One Wins!");
        }else if(computerChoice === "Rock") {
            $("#result").text("You Lose!");
        }else if(computerChoice === "Paper") {
            $("#result").text("You Win");
        }
    } 
//  CLEARING INPUT FIELD
    $('input').val('');
//  WIN LOSS COUNTER

if($("#result").text( ) === "You Win") {
    win+=1;
    $(".winCount").text(win);
}else if($("#result").text( ) === "You Lose!") {
    loss+=1;
    $(".lossCount").text(loss);
}
});    