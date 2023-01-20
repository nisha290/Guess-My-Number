"use strict";

/*
console.log(document.querySelector(".message").textContent);
//Start guessing...
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);
//Correct Number!

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 15;

console.log(document.querySelector(".guess").value); //23
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
const guess = Number(document.querySelector(".guess").value);
//guess is of string datatype so we convert it to number
console.log(guess);
  
  //When there is no input
  if (!guess) {
        //document.querySelector(".message").textContent = "⛔ No number!";
        displayMessage("⛔ No number!");

    //When player wins
  } else if (guess === secretNumber) {
        //document.querySelector(".message").textContent = "🎉 Correct Number!";
        displayMessage("🎉 Correct Number!");

        //showing the secret Number
        document.querySelector(".number").textContent = secretNumber;

        //Manipulating CSS styles using javascript
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "25rem";

        if(score > highScore){
            highScore=score;
            document.querySelector(".highscore").textContent = highScore;
        }

     //When guess is wrong   
  }else if(guess !== secretNumber){
        if (score > 1) {
            //document.querySelector(".message").textContent = guess>secretNumber ?"📈 Too High" : "📉 Too Low" ;
            displayMessage(guess>secretNumber ?"📈 Too High" : "📉 Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            //document.querySelector(".message").textContent = "💥 You lost the game.";
            displayMessage("💥 You lost the game.");
            document.querySelector(".score").textContent = 0;
        }
  }
});

//changes for guessing again (game rest functionality)
document.querySelector(".again").addEventListener("click",function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        //document.querySelector(".message").textContent = "Start quessing ...";
        displayMessage("Start quessing ...");
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
});

