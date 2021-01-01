const score_Text = document.getElementById("score");
const question_Text = document.getElementById("question");
const option_List = document.getElementById("choose-list");
const next_Button = document.querySelector("button");
const currentQuestion_Container = document.querySelector("footer");
let text_Count = 0;
let question_Count = 1;
score_Text.innerHTML = "<h2>Score: 0</h2>";
const question_List = [
  {
    number: 1,
    answer: "March 14, 1879",
    question: "What is the year of Albert Einstein was born?",
    options: ["March 14, 1879", "November 14, 1829", "February 16, 1789"],
  },
  {
    number: 2,
    answer: "Special Relativity",
    question: "What theory did Albert Einstein develop?",
    options: ["Radioactivity", "Universal Gravitation", "Special Relativity"],
  },
  {
    number: 3,
    answer: "12",
    question: "He is __ years old when he discovered a book of geometry.",
    options: ["9", "12", "14"],
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
    question:
      "Where Einstein was when he heard the news about the atomic bomb?",
    options: ["Office", "Vacation", "Meeting"],
  },
];
next_Button.onclick = () => {
  if (question_Count < question_List.length) {
    text_Count++;
    question_Count++;
    questionShow(text_Count, question_Count);
    questionCounter(question_Count);
  } else {
    console.log("Quiz completed");
  }
};
let questionShow = (index) => {
  let question_Popup =
    "<h2>" +
    question_List[index].number +
    ". " +
    question_List[index].question +
    "</h2>";
  let options_Text =
    "<div class='allOption'>" +
    question_List[index].options[0] +
    "</div>" +
    "<div class='allOption'>" +
    question_List[index].options[1] +
    "</div>" +
    "<div class='allOption'>" +
    question_List[index].options[2] +
    "</div>";
  question_Text.innerHTML = question_Popup;
  option_List.innerHTML = options_Text;
};
let questionCounter = (question_Count) => {
  let question_Calculate =
    "<p>" + question_Count + " out of " + question_List.length + "</p>";
  currentQuestion_Container.innerHTML = question_Calculate;
};

questionCounter(question_Count);
questionShow(text_Count);
