//----------------------------------- Lets for quiz -----------------------------------
let points = 0;
let hiddenQuestion = 0;
let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");

//----------------------------------- Lets for buttons --------------------------------
let nextButton = document.querySelector(".nextButton");
let finishButton = document.querySelector(".finishButton");

//----------------------------------- Event Listeners ---------------------------------
nextButton.addEventListener("click", nextQuestion);


//------------------------------------- Functions -------------------------------------
function nextQuestion() {
    q1.classList.toggle("hidden");
    q2.classList.toggle("hidden");
}

function finishQuiz () {

}


