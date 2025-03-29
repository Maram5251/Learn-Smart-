const questions3 = [
    {
        question: "The cake ...(to bake) by Sarah.",
        answers: [
            { text: "was baked", correct: true },
            { text: "bakes", correct: false },
            { text: "is baking", correct: false }
        ]
    },
    {
        question: "I will call you tomorrow",
        answers: [
            { text: "Direct speech ", correct: true },
            { text: "Indirect speech", correct: false },
            { text: "Passive voice", correct: false }
        ]
    },
    {
        question: " She asked if I could help her with her bags.",
        answers: [
            { text: "Passive voice", correct: false },
            { text: "Direct speech", correct: true },
            { text: "Indirect speech", correct: false }
        ]
    },
    {
        question: "The book that I borrowed from the library is fascinating.",
        answers: [
            { text: "Main clause", correct: false },
            { text: "Subordinate clause", correct: false },
            { text: "Relative clause", correct: true }
        ]
    },
    {
        question: "The manager is reviewing the reports.",
        answers: [
            { text: "Active voice", correct: true },
            { text: "Indirect speech", correct: false },
            { text: "Passive voice", correct: false }
        ]
    }
];

const questionElement3 = document.getElementById('question3');
const answerbtnElement3 = document.getElementById('answerbtns3');
const nextbtn3 = document.getElementById('next-btn3');
let currentQuestionIndex3 = 0;
let score3 = 0;

function startQuiz3() {
    currentQuestionIndex3 = 0;
    score3 = 0;
    nextbtn3.innerHTML = "Next";
    showQuestion3();
}

function showQuestion3() {
    resetState3();
    let currentQuestion3 = questions3[currentQuestionIndex3];
    let questionNb = currentQuestionIndex3 + 1;
    questionElement3.innerHTML = questionNb + ". " + currentQuestion3.question;

    currentQuestion3.answers.forEach(answer => {
        const button3 = document.createElement("button");
        button3.innerHTML = answer.text;
        button3.classList.add('btn');
        answerbtnElement3.appendChild(button3);
        if (answer.correct) {
            button3.dataset.correct = answer.correct;
        }
        button3.addEventListener("click", selectAnswer3); 
    });
}

function selectAnswer3(e) {
    const selectedbtn3 = e.target;
    const isCorrect3 = selectedbtn3.dataset.correct === "true";
    if (isCorrect3) {
        selectedbtn3.classList.add("correct");
        score2++;
    } else {
        selectedbtn3.classList.add("incorrect");
    }

    Array.from(answerbtnElement3.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn3.style.display = "block";
}

function showScore3() {
    resetState3();
    questionElement3.innerHTML = `You scored ${score3} out of ${questions3.length}!`;
    nextbtn3.innerHTML = "Play Again";
    nextbtn3.style.display = "block";
}

function handleNextbtn3() {
    currentQuestionIndex3++;
    if (currentQuestionIndex3 < questions3.length) {
        showQuestion3();
    } else {
        showScore3();
    }
}

nextbtn3.addEventListener("click", () => {
    if (currentQuestionIndex3 < questions3.length) {
        handleNextbtn3();
    } else {
        startQuiz3();
    }
});

function resetState3() {
    nextbtn3.style.display = "none";
    while (answerbtnElement3.firstChild) {
        answerbtnElement3.removeChild(answerbtnElement3.firstChild);
    }
}

startQuiz3();
