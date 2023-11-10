const questions = [
    {
        question: "How many championships did Micheal Jordan win over his career ?", 
        answers: [
            {text: "10", correct: false},
            {text: "5", correct: false},
            {text: "7", correct: false},
            {text: "6", correct: true},
        ]
    },
    {
        question: "What is the most points ever scored in a game ?",
        answers: [
            {text: "89 points", correct: false},
            {text: "110 points", correct: false}, 
            {text: "71 points", correct: false},
            {text: "100 points", correct: true},
        ]
    }, 
    {
        question: "How many 3 pointers did Shaq O'Neal make in his career ?", 
        answers: [
            {text: "1000", correct: false}, 
            {text: "1", correct: true}, 
            {text: "500", correct: false}, 
            {text: "100", correct: false}, 
        ]
    }, 
    {
        question: "How many blocked did the shortest player in NBA history have ?", 
        answers: [
            {text: "39 blocks", correct: true},
            {text: "10 blocks", correct: false},
            {text: "3 blocks", correct: false},
            {text: "30 blocks", correct: false},
        ]
    },
    {
        question: "What is Kobe Bryant middle name ?",
        answers: [
        {text: "Kobe Black Bryant", correct: false},
        {text: "Kobe Mamba Bryant", correct: false},        
        {text: "Kobe Christopher Bryant", correct: false},
        {text: "Kobe Bean Bryant", correct: true},
        ]
    },
    {
        question: "What year was the NBA founded ?", 
        answers: [
            {text: "1700", correct: false},
            {text: "1900", correct: false},
            {text: "1946", correct: true},
            {text: "1955", correct: false},
        ]
    },
    {
        question: "Which player is featured in the NBA Logo ?", 
        answers: [
            {text: "Mr Beast", correct: false},
            {text: "Jerry West", correct: true},
            {text: "Micheal Jordan", correct: false},
            {text: "Magic Johnson", correct: false},
        ]
    }
    {
        question: "Which player is this ?", 
        answers: [
            {text: "Stephen Curry", correct: true},
            {text: "Jasyon Tatum", correct: false},
            {text: "Klay Thompson", correct: false},
            {text: "Steve Nash", correct: false},
        ]
    },
];

const questionAsked = document.querySelector(".question");
const answerButton = document.querySelector(".options");
const questioNumber = document.querySelector(".questioNumber");
const Score = document.querySelector(".score");
const Image = document.querySelector(".image");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    answerButton.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questioNumber.textContent = `${questionNo} out of 8`;
    questionAsked.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    Score.textContent = `Score: ${score}`;


    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            Array.from(answerButton.children).forEach(button => {
                button.classList.remove("correct", "incorrect");
                button.disabled = false;
            });
            
            showQuestion();
        } else {
            showScore();
        }
    }, 900);
}


function showScore() {
    Image.innerHTML = "";
    answerButton.innerHTML = "";

    questionAsked.innerHTML = `You scored ${score} out of 8`;

    const button = document.createElement("button");
    button.classList.add("retry");
    button.textContent = "Retry";
    answerButton.appendChild(button);

    button.addEventListener('click', retryQuiz)
} 

function retryQuiz() {
    score = 0;
    currentQuestionIndex = 0;


    showQuestion();
}

showQuestion();