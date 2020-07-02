const questionContainer = document.getElementById('quiz-question-container');
const answersContainer = document.getElementById('quiz-answers-container');
const answerList = document.getElementById('answers');
const submitBtn = document.getElementById('submit-quiz-answer-btn');
const quitBtn = document.getElementById('quit-quiz-btn');
const questions = [
     {
        question: 'hur många fingrar har en hand?',
        answer1: 5,
        answer2: 10,
        answer3: 15,
        rightAnswer: 'answer1'
    },
    {
        question: 'hur många tår har en fot?',
        answer1: 33,
        answer2: 12,
        answer3: 5,
        rightAnswer: 'answer3'
    },
    {
        question: 'hur många ben har en hund?',
        answer1: 5,
        answer2: 4,
        answer3: 8,
        rightAnswer: 'answer2'
    },
    {
        question: 'hur många ben har en papegoja?',
        answer1: 2,
        answer2: 7,
        answer3: 8,
        rightAnswer: 'answer1'
    },
    {
        question: 'Vad heter Sveriges huvudstad?',
        answer1: 'Stockholm',
        answer2: 'Malmö',
        answer3: 'Göteborg',
        rightAnswer: 'answer1'
    },
    {
        question: 'Vilken dag är Smålands nationaldag?',
        answer1: '6:e juni',
        answer2: '12:e augusti',
        answer3: 'Fössta tosstan i mass',
        rightAnswer: 'answer3'
    },
    {
        question: 'Vad heter Sveriges stadsminister?',
        answer1: 'Stefan Löfven',
        answer2: 'Lars Ohly',
        answer3: 'Jimmie Åkesson',
        rightAnswer: 'answer1'
    },
    {
        question: 'Vad kallas din mammas mor?',
        answer1: 'gammelmor',
        answer2: 'mormor',
        answer3: 'morfar',
        rightAnswer: 'answer2'
    },
    {
        question: 'hur många ben har en myra?',
        answer1: 5,
        answer2: 4,
        answer3: 8,
        rightAnswer: 'answer3'
    },
    {
        question: 'hur många år går det på ett kvartal?',
        answer1: 25,
        answer2: 5,
        answer3: 8,
        rightAnswer: 'answer1'
    }
]
let showedQuestion;
let gameQuestions = [];

const shuffleQuestions = () => {
    let tmpQuestions = [...questions];
    let question;
    while(tmpQuestions.length > 0) {
        question = (Math.floor(Math.random()* tmpQuestions.length));
        let quest = tmpQuestions.splice(question, 1);
        gameQuestions.push(...quest);
    }
    console.log(gameQuestions);
    return gameQuestions;

}//FUNKAR

const getQuestion = () => {
    return gameQuestions.shift();
}//FUNKAR

const assignQuestion = () => {
    showedQuestion = getQuestion();
}//FUNKAR