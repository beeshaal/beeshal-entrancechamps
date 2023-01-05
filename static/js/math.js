const quizData = [
    {
        question: "The maximumi value of logx/x is",
        a: "1/e",
        b: "e",
        c: "1",
        d: "0",
        correct: "b",
    },
    {
        question: "20 is divided into two parts so that the product of the cube of one quantity and the same of the other quantity is maximum. These parts are",
        a: "12,8",
        b:"10,10",
        c: "16,4",
        d: "8,12",
        correct: "c",
    },
    {
        question: "If dF(x)/dx = f(x), then",
        a: "f(x) is an integral of F(x)",
        b: "F(x) is an integral of f(x)+c",
        c: "f(x)+c is an integral of f(x)",
        d: "F(x)+c is an integral of f(x)",
        correct: "d",
    },
    {
        question: "In a house there are three entrance doors and two exit door. In how many ways can a person enter the house and then come out?",
        a: "5",
        b: "6",
        c: "4",
        d: "2",
        correct: "b",
    },
    {
        question: "Three people enter a railway carriage, where there are 5 vacant seats. In how many ways they can seat themselves?",
        a: "15",
        b: "12",
        c: "50",
        d: "60",
        correct: "d",
    },
    {
        question: "How many words(with or without meaning) of three distinct alphabets are there?",
        a: "26",
        b: "75",
        c: "15600",
        d: "1560",
        correct: "c",
    },
    {
        question: "If P(n-4) = 20P(n,2). Then the value of n is:",
        a: "2",
        b: "-2",
        c: "7",
        d: "-7", 
        correct: "b",
    },
    {
        question: "How many permutation of the letters of the word 'APPLE' are there?",
        a: "5!",
        b: "4!",
        c: "60",
        d: "5!x2!",
        correct: "c",
    },
    {
        question: "If the eccentricity of a conic section is 3/7, the conic section is",
        a: "parabola",
        b: "ellipse",
        c: "hyperbola",
        d: "circle",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Congratulations! You answered ${score} out of ${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Practice Again >></button>
           `
       }
    }
})