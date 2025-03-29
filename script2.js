const questions1=[
    {
        question: "She...(to go) to the market every Saturday",
        answers:[
            {text: "goes" , correct:true },
            {text: "is going", correct:false},
            {text:"will go", correct:false},
        ]
    },
        {
            question: "Right now, the children...(to play) in the park.",
        answers:[
            {text: "play" , correct:false },
            {text: "are playing", correct:true},
            {text:"have played", correct:false},
        ]
        },
        {
            question: "We ... (to finish) our homework before the movie started.",
        answers:[
            {text: "finished" , correct:false },
            {text: "have finished", correct:false},
            {text:"had finished", correct:true},
        ]
        },
        {
            question: "I ... (to meet) her tomorrow at the cafe.",
            answers:[
                {text: "will meet" , correct:true },
                {text: "am meeting", correct:false},
                {text:"meet", correct:false},
            ]  
        },
        {
            question: "He always ... (to forget) his keys.",
            answers:[
                {text: "is forgetting" , correct:false },
                {text: "forgot", correct:false},
                {text:"forgets", correct:true},
            ]  
        }
];
const questionElement=document.getElementById('question1');
const answerbtnElement=document.getElementById('answerbtns1');
const nextbtn=document.getElementById('next-btn1');
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
currentQuestionIndex=0;
score=0;
nextbtn.innerHTML="Next";
showQuestion();
}
function showQuestion(){
resetState();
let currentQuestion= questions1[currentQuestionIndex];
let questionNb=currentQuestionIndex+1;
questionElement.innerHTML=questionNb+". "+currentQuestion.question;
currentQuestion.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add('btn');
    answerbtnElement.appendChild(button);
    if (answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
})

}
function selectAnswer(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if (isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtnElement.children).forEach(button => {
        if (button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions1.length}!`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}
function handleNextbtn(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions1.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=> {
    if(currentQuestionIndex<questions1.length){
        handleNextbtn();
    } 
    else{
        startQuiz();
    }
})
function resetState(){
nextbtn.style.display="none";
while(answerbtnElement.firstChild){
    answerbtnElement.removeChild(answerbtnElement.firstChild);
}
}
startQuiz();

