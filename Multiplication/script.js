const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 10);

const getQuestions = document.getElementById("question");
const getScore = document.getElementById("score");
const getForm = document.getElementById("form");
const getInput = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score")); // number
// let score = localStorage.getItem("score"); // !string

if (!score) {
  score = 0;
}

getScore.innerText = `Score: ${score}`
getQuestions.innerText = `What is ${num1} multiply by ${num2}?`

let correctAnswer = num1 * num2;

getForm.addEventListener("submit", () => {
  const userAnswer = +getInput.value;

  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }

});


function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}




