const quizContainer = document.getElementById('quiz-container');
const scoreField = document.getElementById('examine-answer');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('quit-btn');
//quiz-frågor
const quizQuestions = [
  {
    question: 'What breed is Scooby Doo?',
    answers: {
      a: 'Corgi',
      b: 'Afghan Hound',
      c: 'Great Dane',
    },
    correctAnswer: 'c',
  },
  {
    question: ' Which breed of dog is a playing piece in Monopoly?',
    answers: {
      a: 'Basset Hound',
      b: 'Scottish Terrier',
      c: 'Cairn Terrier',
    },
    correctAnswer: 'b',
  },
  {
    question: 'What name is given to a crossbreed dog with beagle and pug parents?',
    answers: {
      a: 'Puggle',
      b: 'Pugabull',
      c: 'Beabull',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Name the cleverest breed of dog:',
    answers: {
      a: 'Dalmatian',
      b: 'Border Collie',
      c: 'Australian Sheperd',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Which of the dog’s senses is most highly developed?',
    answers: {
      a: 'Taste',
      b: 'Sight',
      c: 'Smell',
    },
    correctAnswer: 'c',
  },
  {
    question: 'How many teeth does a fully grown adult dog have?',
    answers: {
      a: '42',
      b: '58',
      c: '24',
    },
    correctAnswer: 'a',
  },
  {
    question: 'What breed was the oldest dog ever to have lived?',
    answers: {
      a: 'Hamiltonstovare',
      b: 'Golden Retriever',
      c: 'Australian Cattle Dog',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Which breed yodels instead of barks?',
    answers: {
      a: 'Basenji',
      b: 'Huskita',
      c: 'Icelandic Sheepdog',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Which dog breed is the favourite of The Queen of England?',
    answers: {
      a: 'Miniature Schnauzer',
      b: 'Poodle',
      c: 'Corgi',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Which breed was once considered sacred in China?',
    answers: {
      a: 'Shi-Tzu',
      b: 'Pekinese',
      c: 'Chow Chow',
    },
    correctAnswer: 'b',
  },
];
const buildQuiz = () => {
  //variabel för HTML-output
  const output = [];
  //För varje fråga...
  quizQuestions.forEach((currentQuestion, questionNumber) => {
    //variabel för lista av svarsalternativ
    const answers = [];
    //och för varje tillgängligt svar...
    for (letter in currentQuestion.answers) {
      //lägg till en HTML-radio-btn
      answers.push(
        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
                </label>`
      );
    }
    //lägg till denna fråga och svarsalternativ i output-arrayen
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')}</div>`
    );
  });
  //kombinera vår output-lista till en string av HTML och lägg upp den på sidan
  quizContainer.innerHTML = output.join('');
};

const showResults = () => {
  //samla svar-containers från quizet
  const answerContainers = quizContainer.querySelectorAll('.answers');
  //håll koll på användarens rätta svar
  let numCorrect = 0;
  //för varje fråga...
  quizQuestions.forEach((currentQuestion, questionNumber) => {
    //hitta valt svar till frågan
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {})
      .value;
    //om svaret är rätt
    if (userAnswer === currentQuestion.correctAnswer) {
      //lägg till 1 till antalet korrekta svar
      numCorrect++;
      //ändra färg på svaret till grönt
      answerContainers[questionNumber].style.color = 'green';
    }
    //om svaret är fel eller tomt
    else {
      //ändra färg på svaret till rött
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  //visa antalet korrekta svar av totalt antal svar
  scoreField.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
};

//visa quizet på en gång
buildQuiz();

submitBtn.addEventListener('click', showResults);
