const questions = [
  {
      question: "What is the capital of France?",
      answer: [
          { text: "London", correct: false },
          { text: "Paris", correct: true },
          { text: "Berlin", correct: false },
          { text: "Rome", correct: false },
      ],
  },
  {
      question: "Which planet is known as the Red Planet?",
      answer: [
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Venus", correct: false },
          { text: "Saturn", correct: false },
      ],
  },
  {
      question: "Who painted the Mona Lisa?",
      answer: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Pablo Picasso", correct: false },
          { text: "Vincent van Gogh", correct: false },
          { text: "Claude Monet", correct: false },
      ],
  },
  {
      question: "What is the largest mammal in the world?",
      answer: [
          { text: "Elephant", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Giraffe", correct: false },
          { text: "Hippopotamus", correct: false },
      ],
  },
  {
      question: "Which element has the chemical symbol 'O'?",
      answer: [
          { text: "Oxygen", correct: true },
          { text: "Gold", correct: false },
          { text: "Silver", correct: false },
          { text: "Carbon", correct: false },
      ],
  },
  // Add more questions here
  {
      question: "What is the currency of Japan?",
      answer: [
          { text: "Yen", correct: true },
          { text: "Dollar", correct: false },
          { text: "Euro", correct: false },
          { text: "Pound", correct: false },
      ],
  },
  {
      question: "In which year did World War II end?",
      answer: [
          { text: "1945", correct: true },
          { text: "1939", correct: false },
          { text: "1950", correct: false },
          { text: "1918", correct: false },
      ],
  },
  {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: [
          { text: "William Shakespeare", correct: true },
          { text: "Jane Austen", correct: false },
          { text: "Charles Dickens", correct: false },
          { text: "Mark Twain", correct: false },
      ],
  },
  {
      question: "What is the largest ocean on Earth?",
      answer: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Arctic Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
      ],
  },
  {
      question: "Who is known as the 'Father of Computer Science'?",
      answer: [
          { text: "Alan Turing", correct: true },
          { text: "Bill Gates", correct: false },
          { text: "Steve Jobs", correct: false },
          { text: "Mark Zuckerberg", correct: false },
      ],
  },
];




const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function reset() {
  nextButton.style.display = "none";
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  reset();
  let currentQuestion = questions[currentQuestionIndex];
  let quesNo = currentQuestionIndex + 1;
  questionElement.innerHTML = quesNo + ". " + currentQuestion.question;

  answerButton.innerHTML = "";

  currentQuestion.answer.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
  });
}

function selectAnswer(answer) {
  const selectedButton = answerButton.querySelector(`[data-correct='true']`);
  const isCorrect = answer.correct;

  if (isCorrect) {
    score++;
  }

  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add(isCorrect ? "correct" : "incorrect");
    }
  });

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // Quiz is finished
    alert(`Quiz completed!\nYour score: ${score}/${questions.length}`);
  }
}

nextButton.addEventListener("click", nextQuestion);

startQuiz();