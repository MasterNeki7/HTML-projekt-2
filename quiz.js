//----------------------------------- Lets for quiz -----------------------------------
let points = 0;
let hiddenQuestion = 0;

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let questionIndex = 0;
//----------------------------------- Lets for buttons --------------------------------
let backButton = document.querySelector(".backButton");
let nextButton = document.querySelector(".nextButton");
let finishButton = document.querySelector(".finishButton");

//----------------------------------- Event Listeners ---------------------------------
nextButton.addEventListener("click", nextQuestion);

//----------------------------------- Lists -------------------------------------------
let questions = [];
questions.push(q1);
questions.push(q2);
questions.push(q3);

//------------------------------------- Functions -------------------------------------
function nextQuestion() {
    questionIndex = (questionIndex + 1) % questions.length;
    questionShowed(questionIndex);
}



function questionShowed(index) {
    for (let i = 0; i < questions.length; i++) {
        if (i == index) {
            questions[i].style.display = "block";
        }
        else {
            questions[i].style.display = "none";
        }
    }
}



