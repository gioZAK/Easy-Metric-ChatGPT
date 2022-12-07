const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
    })
}

function selectAnswer() {

}

const question = [{
        question: 'What is 4 + 6',
        answer: [{
            text: "4",
            correct: true
        }, {
            text: "10",
            correct: false
        }]
    },
    {
        question: 'Am I wrong?',
        answer: [{
            text: "yes",
            correct: true
        }, {
            text: "no",
            correct: false
        }]
    },
    {
        question: 'Yaba Yaba doo?',
        answer: [{
            text: "dooo",
            correct: true
        }, {
            text: "yaba yaba",
            correct: false
        }]
    },
]