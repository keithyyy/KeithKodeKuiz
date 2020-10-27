const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What kind of brackets are used when writing a function?',
        choice1: 'Curly Brackets',
        choice2: 'Square Brackets',
        choice3: 'Circle Brackets',
        choice4: 'No Brackets',
        answer: 1
    },
    {
        question: 'Who holds the current Marathon world record?',
        choice1: 'Dennis Kimetto',
        choice2: 'Joshua Cheptegei',
        choice3: 'Eliud Kipchoge',
        choice4: 'Nick Bare',
        answer: 3
    },
    {
        question: 'What does KFC stand for?',
        choice1: 'Kids Favourite Candy',
        choice2: 'Kentucky Fried Chicken',
        choice3: 'Kitchen For Canada',
        choice4: 'King Forrest Charles',
        answer: 2
    },
    {
        question: 'Which is no longer a streaming service?',
        choice1: 'Hulu',
        choice2: 'Crave',
        choice3: 'HBO',
        choice4: 'Quibi',
        answer: 4
    },
]


const MAX_QUESTIONS = 4;

function startGame() {
    questionCounter = 0
    availableQuestions = [...questions];
    getNewQuestion();

};

function getNewQuestion() {
    if(availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('scores.html');
    }

    questionCounter++;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        
        if(!acceptingAnswers) {
            return;
        };

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {

        };


    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion()
    }, 1000)

    })
});

startGame();
