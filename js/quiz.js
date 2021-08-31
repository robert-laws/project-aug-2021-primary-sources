let quiz = [
  {
    id: 1,
    question: 'Primary or Secondary Source?',
    image: 'quiz-1.png',
    title: 'The Bolshevik revolution and Russian Civil War',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991011744269704111',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Secondary Source',
  },
  {
    id: 2,
    question: 'Primary or Secondary Source?',
    image: 'quiz-2.jpg',
    title: 'The Treaty of Versailles',
    link: 'https://www.census.gov/history/pdf/treaty_of_versailles-112018.pdf',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 3,
    question: 'Primary or Secondary Source?',
    image: 'quiz-3.png',
    title:
      'Cartoon by Illingworth on the creation of an area under Soviet influence on the European continent (16 June 1947)',
    link: 'https://www.cvce.eu/en/obj/cartoon_by_illingworth_on_the_creation_of_an_area_under_soviet_influence_on_the_european_continent_16_june_1947-en-162b9b8d-5d49-4b39-b0ac-1df74c5de525.html',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 4,
    question: 'Primary or Secondary Source?',
    image: 'quiz-4.png',
    title: 'The French Revolution : a document collection',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991019254859704111',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 5,
    question: 'Primary or Secondary Source?',
    image: 'quiz-5.png',
    title: 'Bismarck: a life',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991033637219704111',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Secondary Source',
  },
  {
    id: 6,
    question: 'Primary or Secondary Source?',
    image: 'quiz-6.jpg',
    title:
      'Brecht’s Mother Courage and Her Children (Mutter Courage und ihre Kinder)',
    link: 'https://journeys.dartmouth.edu/mothercourage/production-history/',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 7,
    question: 'Primary or Secondary Source?',
    image: 'quiz-7.jpg',
    title: 'Art under Socialist Realism : Soviet painting, 1930-1950',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991000942639704111',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Secondary Source',
  },
  {
    id: 8,
    question: 'Primary or Secondary Source?',
    image: 'quiz-8.jpg',
    title: 'The ruins of the Kaiser Wilhelm Memorial Church',
    link: 'https://en.wikipedia.org/wiki/Kaiser_Wilhelm_Memorial_Church',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 9,
    question: 'Primary or Secondary Source?',
    image: 'quiz-9.png',
    title: 'Code civil des Français (Napoleonic Code)',
    link: 'https://archive.org/details/codenapoleonorf00statgoog/page/n4/mode/2up?view=theater',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Primary Source',
  },
  {
    id: 10,
    question: 'Primary or Secondary Source?',
    image: 'quiz-10.jpg',
    title: 'Napoleon: conquest, reform, reorganisation',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991022795019704111',
    answers: ['Primary Source', 'Secondary Source'],
    correctAnswer: 'Secondary Source',
  },
];

let score = 0;

// 1. set question div as global variable
// 2. create question container with question id
// 3. build question -> 3a. question title with question + 3b. question image with image
// 4. build answer list -> 4a. answer button group with answer array
// 5. add event listener for answer list -> 5a. click event + 5b. check if answer is correct + 5c. append answer result

const questionsContainer = document.getElementById('questions');
const nextButton = document.querySelector('#next-question-button');

const createHeader = (id) => {
  // create header and text
  const headerContainer = document.createElement('div');
  const headerText = document.createTextNode(`Question # ${id}`);

  // question header attributes
  headerContainer.setAttribute('class', 'card-header h3');
  headerContainer.setAttribute('id', `question-${id}-header`);

  // append question header text to question header
  headerContainer.appendChild(headerText);

  // return question header
  return headerContainer;
};

const createQuestion = (id, question, title, link) => {
  // create question container, paragraph, and text
  const questionContainer = document.createElement('div');
  const questionParagraph = document.createElement('p');
  const questionText = document.createTextNode(question);
  const questionLink = document.createElement('a');
  const questionLinkText = document.createTextNode(title);

  // add question attributes
  questionContainer.setAttribute('class', 'card-body');
  questionContainer.setAttribute('id', `question-${id}-question`);
  questionParagraph.setAttribute('class', 'card-text h5');

  // append question text to question paragraph
  questionParagraph.appendChild(questionText);
  questionContainer.appendChild(questionParagraph);

  // add question link attributes
  questionLink.setAttribute('href', link);
  questionLink.setAttribute('target', '_blank');
  questionLink.setAttribute('class', 'card-link fw-bold');
  questionLink.appendChild(questionLinkText);
  questionContainer.appendChild(questionLink);

  return questionContainer;
};

const createImage = (id, image) => {
  // create image
  const imageContainer = document.createElement('img');

  imageContainer.setAttribute('src', `images/${image}`);
  imageContainer.setAttribute('alt', `${image.split('.')[0]}`);
  imageContainer.setAttribute('class', 'img-fluid');

  return imageContainer;
};

const createAnswers = (id, answers) => {
  const answersContainer = document.createElement('div');
  const answersTitle = document.createElement('h5');
  const answersButtonsContainer = document.createElement('div');

  answers.forEach((answer) => {
    const button = document.createElement('button');
    const text = document.createTextNode(answer);
    button.setAttribute('class', 'btn btn-outline-primary');
    button.appendChild(text);
    answersButtonsContainer.appendChild(button);
  });

  answersContainer.setAttribute('class', 'card-body');
  answersTitle.setAttribute('class', 'card-title');
  answersButtonsContainer.setAttribute('class', 'btn-group-vertical w-100');
  answersButtonsContainer.setAttribute('id', `answers-group-${id}`);

  answersContainer.appendChild(answersTitle);
  answersContainer.appendChild(answersButtonsContainer);

  return answersContainer;
};

const createFooter = (id) => {
  const footerContainer = document.createElement('div');
  const footerHeading = document.createElement('h4');
  const footerResult = document.createElement('p');
  footerHeading.appendChild(document.createTextNode('Result:'));

  footerContainer.setAttribute('class', 'card-footer');
  footerHeading.setAttribute('class', 'h4 d-inline-block me-1');
  footerResult.setAttribute('class', 'h4 d-inline-block');
  footerResult.setAttribute('id', `question-${id}-result`);

  footerContainer.appendChild(footerHeading);
  footerContainer.appendChild(footerResult);

  return footerContainer;
};

const createQuestionContainer = (
  id,
  header,
  question,
  image,
  answers,
  footer
) => {
  const questionContainer = document.createElement('div');
  const questionColumn = document.createElement('div');
  const questionCard = document.createElement('div');

  questionContainer.setAttribute('class', 'mb-5');
  questionContainer.setAttribute('id', `q-${id}`);

  questionColumn.setAttribute('class', 'col-12 d-flex justify-content-center');
  questionCard.setAttribute('class', 'card');
  questionCard.setAttribute('style', 'width: 30rem');

  questionCard.appendChild(header);
  questionCard.appendChild(question);
  questionCard.appendChild(image);
  questionCard.appendChild(answers);
  questionCard.appendChild(footer);

  questionColumn.appendChild(questionCard);
  questionContainer.appendChild(questionColumn);

  return questionContainer;
};

const buildQuestion = (id, question, title, link, image, answers) => {
  const header = createHeader(id);
  const questionContent = createQuestion(id, question, title, link);
  const imageContent = createImage(id, image);
  const answersContent = createAnswers(id, answers);
  const footer = createFooter(id);

  const questionContainer = createQuestionContainer(
    id,
    header,
    questionContent,
    imageContent,
    answersContent,
    footer
  );

  return questionContainer;
};

const updateScore = () => {
  const totalQuestions = quiz.length;
  const results = `${score} out of ${totalQuestions} correct`;

  const scoreContainer = document.getElementById('totalScore');
  scoreContainer.innerHTML = results;
};

const addAnswers = (id, answer) => {
  let myButtons = document.querySelector(`#answers-group-${id}`);
  myButtons.addEventListener('click', function (e) {
    let target = e.target;
    let message = target.innerHTML.trim().toLowerCase();
    let correctAnswer = answer.trim().toLowerCase();

    myButtons.querySelectorAll('button').forEach(function (button) {
      if (button.innerHTML.trim().toLowerCase() === message) {
        button.classList.add('bg-primary', 'text-white');
      }
      button.classList.add('disabled');
    });

    if (message === correctAnswer) {
      const resultElement = document.getElementById(`question-${id}-result`);
      const resultSpan = document.createElement('span');
      const resultText = document.createTextNode('Correct!');
      resultSpan.setAttribute('class', 'text-success');
      resultSpan.appendChild(resultText);
      resultElement.appendChild(resultSpan);
      score++;
      updateScore();
    } else {
      const resultElement = document.getElementById(`question-${id}-result`);
      const resultSpan = document.createElement('span');
      const resultText = document.createTextNode('Wrong Answer...');
      resultSpan.setAttribute('class', 'text-danger');
      resultSpan.appendChild(resultText);
      resultElement.appendChild(resultSpan);
    }
  });
};

const buildQuiz = (quizData, addAnswersCallback) => {
  quizData.forEach(
    ({ id, question, image, title, link, answers, correctAnswer }) => {
      const newQuestion = buildQuestion(
        id,
        question,
        title,
        link,
        image,
        answers
      );
      questionsContainer.appendChild(newQuestion);

      addAnswersCallback(id, correctAnswer);
    }
  );
};

buildQuiz(quiz, addAnswers);
updateScore();
