const score_Container = document.getElementById("score");
const question_Container = document.getElementById("question");
const option_Container = document.getElementById("choose-list");
const questionNumber_Container = document.querySelector("footer");
const nextButton = document.querySelector("button");
const countDown = document.getElementById("timerShow");
let questionNumber = 1;
let questionIndex = 0;
const dataList = [
  {
    number: 1,
    answer: "March 14, 1879",
    question: "What is the year of Albert Einstein was born?",
    options: ["March 14, 1879", "February 16, 1789", "November 14, 1829"],
  },
  {
    number: 2,
    answer: "Special Relativity",
    question: "What theory did Albert Einstein develop?",
    options: ["Special Relativity", "Universal Gravitation", "Radioactivity"],
  },
  {
    number: 3,
    answer: "12",
    question: "He is __ years old when he discovered a book of geometry.",
    options: ["12", "14", "16"],
  },
  {
    number: 4,
    answer: "1902",
    question: "He was stateless until ____.",
    options: ["1899", "1982", "1902"],
  },
  {
    number: 5,
    answer: "Vacation",
    question: "Where Einstein was when he heard the news that an atomic bomb?",
    options: ["Office", "Vacation", "Meeting"],
  },
];
nextButton.onclick = () => {
  if (questionIndex < dataList.length - 1) {
    questionIndex++;
    questionNumber++;
    showQuestion(questionIndex);
    questionCounter(questionNumber);
    startTimer(30);
  } else {
    console.log("Quiz completed");
  }
};
let showQuestion = (questionIndex) => {
  const options_Text =
    "<div class='options'>" +
    dataList[questionIndex].options[0] +
    "</div>" +
    "<div class='options'>" +
    dataList[questionIndex].options[1] +
    "</div>" +
    "<div class='options'>" +
    dataList[questionIndex].options[2] +
    "</div>";
  question_Container.innerHTML =
    "<h2>" +
    dataList[questionIndex].number +
    ". " +
    dataList[questionIndex].question +
    "</h2>";
  option_Container.innerHTML = options_Text;
  document.querySelectorAll(".options").forEach((allOptions) => {
    allOptions.setAttribute("onclick", "optionSelected(this)");
  });
};

let optionSelected = (answer) => {
  const userAnswer = answer.textContent;
  const correctAnswer = dataList[questionIndex].answer;
  const getAllOptions = option_Container.children.length;
  if (userAnswer == correctAnswer) {
    console.log(userAnswer + " is correct");
    answer.classList.add("correctAnswer");
  } else {
    answer.classList.add("wrongAnswer");
    console.log(userAnswer + " is wrong");
    for (let index = 0; index < getAllOptions; index++) {
      if (option_Container.children[index].textContent == correctAnswer) {
        option_Container.children[index].setAttribute(
          "class",
          "options correctAnswer"
        );
      }
    }
  }
  for (let c = 0; c < getAllOptions; c++) {
    option_Container.children[c].classList.add("disabled");
  }
};
let questionCounter = (questionNumber) => {
  questionNumber_Container.innerHTML =
    "<p>" + questionNumber + " out of " + dataList.length + "</p>";
};

questionCounter(questionNumber);
showQuestion(questionIndex);
