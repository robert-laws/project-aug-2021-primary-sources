let quiz = [
  {
    id: 1,
    question: 'Primary or Secondary Source?',
    image: 'quiz-1.png',
    title: 'The Bolshevik revolution and Russian Civil War',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991011744269704111',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a secondary source because it is a book written by a historian who has consulted relevant primary and secondary sources to produce a new analysis of the historical events of the Bolshevik revolution and Russian Civil War.',
    correctAnswer: 'Secondary Source',
  },
  {
    id: 2,
    question: 'Primary or Secondary Source?',
    image: 'quiz-2.jpg',
    title: 'The Treaty of Versailles',
    link: 'https://www.census.gov/history/pdf/treaty_of_versailles-112018.pdf',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a primary source because it is an original document. Original documents are produced at the time of the event and are centrally relevant to the event itself, in this case the end of World War I.',
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
    answerDetail:
      'This is a primary source because it is a map that describes a historical event - the beginning of the Cold War in Europe in this case. The map contains details of historical significance. This is also a political cartoon since it makes use of drawings to make a comment about the history. Since the map/cartoon was produced at the time of the events, it is considered a primary source.',
    correctAnswer: 'Primary Source',
  },
  {
    id: 4,
    question: 'Primary or Secondary Source?',
    image: 'quiz-4.png',
    title: 'The French Revolution : a document collection',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991019254859704111',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a primary source because it is a book that contains documents. The book may have an introduction written by a scholar that is written in the form of a secondary source and the editor will curate the documents, but the main contents of the book are one or more individual primary documents.',
    correctAnswer: 'Primary Source',
  },
  {
    id: 5,
    question: 'Primary or Secondary Source?',
    image: 'quiz-5.png',
    title: 'Bismarck: a life',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991033637219704111',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a secondary source because it is a biography about a historical figure written by a historian who has consulted primary and secondary sources to create a new analysis of the life of Bismarck.',
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
    answerDetail:
      'This is a primary source because it is an original creative work of art. The image depicts the play "Mother Courage and Her Children" being produced by actors. The original artwork offers a creative perspective within a historical context. As a creative work, it counts as a primary source.',
    correctAnswer: 'Primary Source',
  },
  {
    id: 7,
    question: 'Primary or Secondary Source?',
    image: 'quiz-7.jpg',
    title: 'Art under Socialist Realism : Soviet painting, 1930-1950',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991000942639704111',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a secondary source because it is a book that recounts the history of the art of socialist realism. The author made use of primary sources, including original creative artwork, and secondary sources to produce the book recounting the history.',
    correctAnswer: 'Secondary Source',
  },
  {
    id: 8,
    question: 'Primary or Secondary Source?',
    image: 'quiz-8.jpg',
    title: 'The ruins of the Kaiser Wilhelm Memorial Church',
    link: 'https://en.wikipedia.org/wiki/Kaiser_Wilhelm_Memorial_Church',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a primary source because it is a building that has an architecture of historical significance. This particular building, the Kaiser Wilhelm Memorial Church, also has additional historical significance from the damage it displays as a result of bombing during World War II.',
    correctAnswer: 'Primary Source',
  },
  {
    id: 9,
    question: 'Primary or Secondary Source?',
    image: 'quiz-9.png',
    title: 'Code civil des Français (Napoleonic Code)',
    link: 'https://archive.org/details/codenapoleonorf00statgoog/page/n4/mode/2up?view=theater',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a primary source because it is an original document. Original documents are produced at the time of the event and are centrally relevant to the event itself. Also, this primary document is in French, but primary documents can be translated into a different language and still retain their status as a primary source.',
    correctAnswer: 'Primary Source',
  },
  {
    id: 10,
    question: 'Primary or Secondary Source?',
    image: 'quiz-10.jpg',
    title: 'Napoleon: conquest, reform, reorganisation',
    link: 'https://wrlc-gu.primo.exlibrisgroup.com/permalink/01WRLC_GUNIV/13v2bp2/alma991022795019704111',
    answers: ['Primary Source', 'Secondary Source'],
    answerDetail:
      'This is a secondary source because it is a book written by a historian who has consulted relevant primary and secondary sources to produce a new analysis of the historical events of the Napoleonic era.',
    correctAnswer: 'Secondary Source',
  },
];

let score = 0;
let currentCard = 2;
const nextQuestionButton = document.getElementById('nextQuestionButton');

// 1. set question div as global variable
// 2. create question container with question id
// 3. build question -> 3a. question title with question + 3b. question image with image
// 4. build answer list -> 4a. answer button group with answer array
// 5. add event listener for answer list -> 5a. click event + 5b. check if answer is correct + 5c. append answer result

const questionsContainer = document.getElementById('questions');
// const nextButton = document.querySelector('#next-question-button');

const createHeader = (id) => {
  // <h3 class="card-header bg-dark border-dark text-white">Question # 1</h3>
  const headerContainer = document.createElement('h3');
  const headerText = document.createTextNode(`Question # ${id}`);

  headerContainer.setAttribute('class', 'card-header h3');
  headerContainer.setAttribute('id', `question-${id}-header`);

  headerContainer.appendChild(headerText);

  return headerContainer;
};

const createQuestion = (id, question) => {
  // <h5 class="card-title">Primary or Secondary Source?</h5>
  const questionContainer = document.createElement('h5');
  const questionText = document.createTextNode(question);

  questionContainer.setAttribute('class', 'card-title');
  questionContainer.setAttribute('id', `question-${id}-question`);

  questionContainer.appendChild(questionText);

  return questionContainer;
};

const createQuestionLink = (title, link) => {
  // <p class='card-text fw-bold'>
  //   <a href='#'>Link to the relevant resources</a>
  // </p>;
  const questionTitleContainer = document.createElement('p');
  const questionTitleLink = document.createElement('a');
  const questionTitleText = document.createTextNode(title);

  questionTitleContainer.setAttribute('class', 'card-text fw-bold');
  questionTitleLink.setAttribute('href', link);
  questionTitleLink.setAttribute('target', '_blank');

  questionTitleLink.appendChild(questionTitleText);
  questionTitleContainer.appendChild(questionTitleLink);

  return questionTitleContainer;
};

const createImage = (id, image) => {
  // <div class="col-md-6">
  //   <img src="images/ghosts.png" class="img-fluid" alt="ghosts" />
  // </div>
  const imageContainer = document.createElement('div');
  const imageElement = document.createElement('img');

  imageContainer.setAttribute('class', 'col-md-4');
  imageElement.setAttribute('src', `images/${image}`);
  imageElement.setAttribute('alt', `${image.split('.')[0]}`);
  imageElement.setAttribute('class', 'img-fluid');

  imageContainer.appendChild(imageElement);

  return imageContainer;
};

const createAnswers = (id, answers) => {
  //  <div>
  //  <p class="card-text fw-bold pt-3 border-top">
  //    Select you answer:
  //  </p>
  //  <div class='btn-group-vertical w-100' id='answers-group-1'>
  //    <button class='btn btn-outline-primary'>Paris</button>
  //    <button class='btn btn-outline-primary'>London</button>
  //    <button class='btn btn-outline-primary'>Berlin</button>
  //    <button class='btn btn-outline-primary'>Madrid</button>
  //  </div>
  // </div>
  const answersContainer = document.createElement('div');
  const answersTitle = document.createElement('p');
  const answersTitleText = document.createTextNode('Select you answer:');
  const answersButtonsContainer = document.createElement('div');

  answers.forEach((answer) => {
    const button = document.createElement('button');
    const text = document.createTextNode(answer);
    button.setAttribute('class', 'btn btn-outline-primary');
    button.appendChild(text);
    answersButtonsContainer.appendChild(button);
  });

  answersTitle.setAttribute('class', 'card-text fw-bold pt-3 border-top');
  answersButtonsContainer.setAttribute('class', 'btn-group-vertical w-100');
  answersButtonsContainer.setAttribute('id', `answers-group-${id}`);

  answersTitle.appendChild(answersTitleText);
  answersContainer.appendChild(answersTitle);
  answersContainer.appendChild(answersButtonsContainer);

  return answersContainer;
};

const createAnswerDetail = (id, answerDetail) => {
  //  <p class='card-text pt-3 mt-4 border-top'>
  //    This is a primary source because it contains documents.
  //  </p>
  const answerDetailContainer = document.createElement('div');
  const answerDetailHeader = document.createElement('h5');
  const answerDetailHeaderText = document.createTextNode('Answer Details:');
  const answerDetailParagraph = document.createElement('p');
  const answerDetailText = document.createTextNode(answerDetail);

  answerDetailContainer.setAttribute(
    'class',
    'card-text pt-3 mt-4 border-top d-none'
  );
  answerDetailContainer.setAttribute('id', `answer-detail-${id}`);
  answerDetailParagraph.setAttribute('class', 'text-dark');

  answerDetailHeader.appendChild(answerDetailHeaderText);
  answerDetailParagraph.appendChild(answerDetailText);
  answerDetailContainer.appendChild(answerDetailHeader);
  answerDetailContainer.appendChild(answerDetailParagraph);

  return answerDetailContainer;
};

const createFooter = (id) => {
  // <div class='card-footer'>
  //   <h4 class='h4 d-inline-block me-1'>Result:</h4>
  //   <p class='h4 d-inline-block' id='question-1-result'></p>
  // </div>
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
  questionContent,
  questionLink,
  imageContent,
  answersDetail,
  answersContent,
  footer
) => {
  const questionCard = document.createElement('div');
  const questionRow = document.createElement('div');
  const questionCol = document.createElement('div');
  const questionBody = document.createElement('div');

  questionCard.setAttribute('class', 'card border mb-3 d-none reveal');
  questionCard.setAttribute('style', 'max-width: 100%');
  questionCard.setAttribute('id', `q-${id}`);

  questionRow.setAttribute('class', 'row g-0');
  questionCol.setAttribute('class', 'col-md-8');
  questionBody.setAttribute('class', 'card-body');

  questionBody.appendChild(questionContent);
  questionBody.appendChild(questionLink);
  questionBody.appendChild(answersContent);
  questionBody.appendChild(answersDetail);
  questionCol.appendChild(questionBody);

  questionRow.appendChild(imageContent);
  questionRow.appendChild(questionCol);

  questionCard.appendChild(header);
  questionCard.appendChild(questionRow);
  questionCard.appendChild(footer);

  return questionCard;
};

const buildQuestion = (
  id,
  question,
  title,
  link,
  image,
  answers,
  answerDetail
) => {
  const header = createHeader(id);
  const questionContent = createQuestion(id, question);
  const questionLink = createQuestionLink(title, link);
  const imageContent = createImage(id, image);
  const answersContent = createAnswers(id, answers);
  const answersDetail = createAnswerDetail(id, answerDetail);
  const footer = createFooter(id);

  const questionContainer = createQuestionContainer(
    id,
    header,
    questionContent,
    questionLink,
    imageContent,
    answersDetail,
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

const revealAnswer = (id) => {
  const answerDetail = document.getElementById(`answer-detail-${id}`);
  answerDetail.classList.remove('d-none');
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
      revealAnswer(id);
      updateScore();
      toggleNextButtonState();
    } else {
      const resultElement = document.getElementById(`question-${id}-result`);
      const resultSpan = document.createElement('span');
      const resultText = document.createTextNode('Wrong Answer...');
      resultSpan.setAttribute('class', 'text-danger');
      resultSpan.appendChild(resultText);
      resultElement.appendChild(resultSpan);
      revealAnswer(id);
      toggleNextButtonState();
    }
  });
};

const buildQuiz = (quizData, addAnswersCallback) => {
  quizData.forEach(
    ({
      id,
      question,
      image,
      title,
      link,
      answers,
      answerDetail,
      correctAnswer,
    }) => {
      const newQuestion = buildQuestion(
        id,
        question,
        title,
        link,
        image,
        answers,
        answerDetail
      );
      questionsContainer.appendChild(newQuestion);

      addAnswersCallback(id, correctAnswer);
    }
  );
};

const toggleNextButtonState = () => {
  nextQuestionButton.disabled === true
    ? (nextQuestionButton.disabled = false)
    : (nextQuestionButton.disabled = true);
};

const setCards = () => {
  const firstQuestion = document.getElementById(`q-1`);
  firstQuestion.classList.remove('d-none');

  nextQuestionButton.disabled = true;
};

const checkFinished = () => {
  if (currentCard - 1 > quiz.length) {
    document.querySelector('#stickyScore').classList.add('d-none');
    nextQuestionButton.disabled = true;
    questionsContainer.innerHTML = `<div class='w-100 d-flex flex-column justify-content-center align-items-center' style='height: 500px'><h1>Quiz Completed!</h1><h2>Your score is ${score} out of ${quiz.length} correct</h2></div>`;
  }
};

nextQuestionButton.addEventListener('click', () => {
  let cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.attributes.id.value === `q-${currentCard}`
      ? card.classList.remove('d-none')
      : card.classList.add('d-none');
  });

  toggleNextButtonState();
  currentCard++;
  checkFinished();
});

buildQuiz(quiz, addAnswers);
updateScore();
setCards();
