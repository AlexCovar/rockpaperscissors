//GLOBAL VARIABLES
let rock;
let paper;
let scissors;
let array;
let randomValue;
let userChoice;
let computerChoice;
// GETTING THE VALUE
userChoice = $("input").val();
$("input").val(); 
// PRINTING VALUE (USER CHOICE)
$("button").click(function(){
    $("#userChoice").text($("#input").val());
});
// SETTING UP ARRAY
 array = [
     "Rock",
     "Paper",
     "Scisors"
 ]
 // RANDOM VALUE FROM ARRAY / PRINTING VALUE (COMPUTER CHOICE)
 $("button").click(function(){
    computerChoice = randomValue = array[Math.floor(array.length * Math.random())];
    $("#computerChoice").text(randomValue);
});
// IF ELSE STATEMENTS 
let compare = function(choice1,choice2){
if(choice1===choice2) {
    alert("no one wins!");
}else if(choice1 === "Rock" && choice2 === "Scissors") {
    alert("You Win!");
}else if(choice1 === "Paper" && choice2 === "Rock") {

}else {

}
};
compare(userChoice,computerChoice);