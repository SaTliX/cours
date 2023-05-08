const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');

const api = 'https://api.quotable.io/random';

function getQuote() {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      quoteElement.textContent = `"${data.content}"`;
      authorElement.textContent = `- ${data.author}`;
    })
    .catch(error => console.error(error));
}

getQuote();


const buttonElement = document.querySelector('#new-quote-button');

buttonElement.addEventListener('click', () => {
  quoteElement.classList.add('animate-pulse');
  getQuote();
  setTimeout(() => {
    quoteElement.classList.remove('animate-pulse');
  },);
});



const challengeElement = document.querySelector('#activity');
const typeElement = document.querySelector('#type');
const participantsElement = document.querySelector('#participants');
const btn = document.querySelector('#new-challenge-button');
const api2 = 'https://www.boredapi.com/api/activity/';

function getChallenge() {
  fetch(api2)
    .then(response => response.json())
    .then(data => {
      challengeElement.textContent = data.activity;
      typeElement.textContent = `Type: ${data.type}`;
      participantsElement.textContent = `Participants: ${data.participants}`;
    })
    .catch(error => console.error(error));
}

getChallenge();

btn.addEventListener('click', () => {
  challengeElement.classList.add('animate-pulse');
  getChallenge();
  setTimeout(() => {
    challengeElement.classList.remove('animate-pulse');
  },);
});

