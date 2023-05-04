//----------------------------------- Lets for quiz -----------------------------------
let points = 0;
let hiddenQuestion = 0;

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let q6 = document.getElementById("q6");
let q7 = document.getElementById("q7");
let q8 = document.getElementById("q8");
let q9 = document.getElementById("q9");
let q10 = document.getElementById("q10");

// let qEnd = document.getElementById("qEnd");


// let finalPoints = document.querySelector("points");

let questionIndex = 0;

//----------------------------------- Lets for buttons --------------------------------
let backButton = document.querySelector(".backButton");
let nextButton = document.querySelector(".nextButton");
let finishButton = document.querySelector(".finishButton");

//----------------------------------- Event Listeners ---------------------------------
nextButton.addEventListener("click", nextQuestion);
backButton.addEventListener("click", previousQuestion);
finishButton.addEventListener("click", handleForm);


//----------------------------------- Lists -------------------------------------------
let questions = [];
questions.push(q1);
questions.push(q2);
questions.push(q3);
questions.push(q4);
questions.push(q5);
questions.push(q6);
questions.push(q7);
questions.push(q8);
questions.push(q9);
questions.push(q10);

//------------------------------------- Functions -------------------------------------
function nextQuestion() {
    if (questionIndex < questions.length - 1) {
        questionIndex = Math.max(questionIndex + 1) % questions.length;
    }

    if(questionIndex == questions.length - 1) {
        nextButton.classList.toggle("hidden");
        finishButton.classList.toggle("hidden");
    }
    
    if(questionIndex == 1) {
        backButton.classList.toggle("hidden");
    }



    questionShowed(questionIndex);
}

function previousQuestion() {

    if(questionIndex == questions.length - 1) {
        nextButton.classList.toggle("hidden");
        finishButton.classList.toggle("hidden");
    }

    if(questionIndex == 1) {
        backButton.classList.toggle("hidden");
    }

    questionIndex = Math.max(questionIndex - 1, 0);
    questionShowed(questionIndex);

}

function handleForm() {
    let answers = document.querySelectorAll("input:checked");
    let points = 0;

    for (let a = 0; a < answers.length; a++) {
        points += parseInt(answers[a].value, 10);
    }
    alert(`you got ${points} points!`);

    // questions.push(qEnd);
    // finalPoints.innerHTML = points;
    // qEnd.classList.toggle("hidden");
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

