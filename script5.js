const questions1=[
    {
        question: "What does 'Hola' mean in English?",
        answers:[
            {text: "Goodbye" , correct:false},
            {text: "Thank you", correct:false},
            {text:"Hello", correct:true},
        ]
    },
        {
            question: "How do you say 'I am hungry' in Spanish?",
        answers:[
            {text: "Estoy cansado" , correct:false },
            {text: "Estoy feliz", correct:false},
            {text:"Tengo hambre", correct:true},
        ]
        },
        {
            question: "What is the Spanish word for 'book'?",
        answers:[
            {text: "Libro" , correct:true },
            {text: "Mesa", correct:false},
            {text:"silla", correct:false},
        ]
        },
        {
            question: "How do you say 'My name is' in Spanish?",
            answers:[
                {text: "Mi nombre es" , correct:true },
                {text: "Yo tengo", correct:false},
                {text:"Mi dirección es", correct:false},
            ]  
        },
        {
            question: "What does 'Gracias' mean ? ",
            answers:[
                {text: "Sorry" , correct:false },
                {text: "Thank you", correct:true},
                {text:"Please", correct:false},
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