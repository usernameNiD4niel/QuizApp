const questionData = [
    {
        question: "If you add 1 and 1 what will be the result?",
        choices: {
            a: 2,
            b: 3,
            c: 11,
            d: "None of the above"
        },
        correct_answer: "a"
    },{
        question: "If you divide 1 and 1 what will be the result?",
        choices: {
            a: 2,
            b: 3,
            c: 11,
            d: "None of the above"
        },
        correct_answer: "d"
    }, {
        question: "If you get the product of 1 and 1 what will be the result?",
        choices: {
            a: 12,
            b: 1,
            c: 11,
            d: "None of the above"
        },
        correct_answer: "b"
    },{
        question: "If you get the difference of 1 and 1 what will be the result?",
        choices: {
            a: 2,
            b: -4,
            c: 0,
            d: "None of the above"
        },
        correct_answer: "c"
    }, {
        question: "Who is the most handsome man living in this world?",
        choices: {
            a: "Enrique Gil",
            b: "Daniel Padilla",
            c: "Daniel Rey",
            d: "None of the above"
        },
        correct_answer: "c"
    }
]

let currentPosition = 0, score = 0;

const answers = [];

const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");

const h2 = document.querySelector("h2");
const nextButton = document.querySelector("button");

const slide_1 = document.querySelector(".slide1");
const slide_2 = document.querySelector(".slide2");
const slide_3 = document.querySelector(".slide3");
const slide_4 = document.querySelector(".slide4");
const slide_5 = document.querySelector(".slide5");

const choices = document.querySelectorAll(".choice");

if(currentPosition === 0) slide_1.classList.toggle('active');

const nextQuestion = () => {

    if(nextButton.innerText === "Retake Quiz") {cleanUpDrive(); return;}

    let hasSelectedAnswer = false;

    choices.forEach(value => {

        if(value.checked) {
            hasSelectedAnswer = true;
            return;
        }

    });

    if(!hasSelectedAnswer) {
        alert("Please enter answer first");
        return;
    }

    resetUserAnswer();

    currentPosition++;
    
    if(currentPosition === 5) {
        answers.forEach((value, index) => {
            if(questionData[index].correct_answer === value) {
                score++;
            }
        });
        nextButton.innerText = "Retake Quiz";
        nextButton.classList.toggle('reTake');

        h2.innerText = `Congrationlation you've got ${score} out of 5 score!`;
        h2.classList.toggle('reTakeHeader');

        const ul = document.querySelector('ul');
        const container = document.querySelector('.container');

        container.removeChild(ul);
        return;
    }

    if(currentPosition === 4) {
        nextButton.innerText = "Submit";
    }

    loadQuestion();


    
    if(currentPosition === 1) manipulateClassList(slide_2, slide_1);

    if(currentPosition === 2) manipulateClassList(slide_3, slide_2);

    if(currentPosition === 3) manipulateClassList(slide_4, slide_3);

    if(currentPosition === 4) manipulateClassList(slide_5, slide_4);
    

}

function cleanUpDrive() {
    location.assign('/');
}

function resetUserAnswer() {
    choices.forEach(value => {
        if(value.checked) {
            answers.push(value.getAttribute('answer'));
            value.checked = false; 
            return;
        }
    });
}

function loadQuestion() {
    h2.innerText = questionData[currentPosition].question;
    a.innerText = questionData[currentPosition].choices.a;
    b.innerText = questionData[currentPosition].choices.b;
    c.innerText = questionData[currentPosition].choices.c;
    d.innerText = questionData[currentPosition].choices.d;
}

function manipulateClassList(currentSlide,previousSlide) {
    currentSlide.classList.add('active');
    previousSlide.classList.remove('active');
}

nextButton.addEventListener('click', nextQuestion);
loadQuestion();