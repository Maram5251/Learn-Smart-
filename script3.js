const questions2 = [
    {
        question: "The weather has changed so ... ",
        answers: [
            { text: "worst", correct: false },
            { text: "badly", correct: true },
            { text: "bad", correct: false }
        ]
    },
    {
        question: "You can solve the problem ... ",
        answers: [
            { text: "easily", correct: true },
            { text: "easy", correct: false },
            { text: "ease", correct: false }
        ]
    },
    {
        question: "He ... (to write) the letter yesterday.",
        answers: [
            { text: "wrote", correct: true },
            { text: "have written", correct: false },
            { text: "had written", correct: false }
        ]
    },
    {
        question: "I enjoy ... in the morning.",
        answers: [
            { text: "run", correct: false },
            { text: "ran", correct: false },
            { text: "running", correct: true }
        ]
    },
    {
        question: "The ... moment of her life was when she got her dream job.",
        answers: [
            { text: "happy", correct: false },
            { text: "happiest", correct: true },
            { text: "happier", correct: false }
        ]
    }
];

const questionElement2 = document.getElementById('question2');
const answerbtnElement2 = document.getElementById('answerbtns2');
const nextbtn2 = document.getElementById('next-btn2');
let currentQuestionIndex2 = 0;
let score2 = 0;

function startQuiz2() {
    currentQuestionIndex2 = 0;
    score2 = 0;
    nextbtn2.innerHTML = "Next";
    showQuestion2();
}

function showQuestion2() {
    resetState2();
    let currentQuestion2 = questions2[currentQuestionIndex2];
    let questionNb = currentQuestionIndex2 + 1;
    questionElement2.innerHTML = questionNb + ". " + currentQuestion2.question;

    currentQuestion2.answers.forEach(answer => {
        const button2 = document.createElement("button");
        button2.innerHTML = answer.text;
        button2.classList.add('btn');
        answerbtnElement2.appendChild(button2);
        if (answer.correct) {
            button2.dataset.correct = answer.correct;
        }
        button2.addEventListener("click", selectAnswer2); // Change to selectAnswer2
    });
}

function selectAnswer2(e) {
    const selectedbtn2 = e.target;
    const isCorrect2 = selectedbtn2.dataset.correct === "true";
    if (isCorrect2) {
        selectedbtn2.classList.add("correct");
        score2++;
    } else {
        selectedbtn2.classList.add("incorrect");
    }

    Array.from(answerbtnElement2.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn2.style.display = "block";
}

function showScore2() {
    resetState2();
    questionElement2.innerHTML = `You scored ${score2} out of ${questions2.length}!`;
    nextbtn2.innerHTML = "Play Again";
    nextbtn2.style.display = "block";
}

function handleNextbtn2() {
    currentQuestionIndex2++;
    if (currentQuestionIndex2 < questions2.length) {
        showQuestion2();
    } else {
        showScore2();
    }
}

nextbtn2.addEventListener("click", () => {
    if (currentQuestionIndex2 < questions2.length) {
        handleNextbtn2();
    } else {
        startQuiz2();
    }
});

function resetState2() {
    nextbtn2.style.display = "none";
    while (answerbtnElement2.firstChild) {
        answerbtnElement2.removeChild(answerbtnElement2.firstChild);
    }
}

startQuiz2();
