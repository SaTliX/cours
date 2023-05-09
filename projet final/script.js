// Sélectionne l'élément HTML où la citation sera affichée
const quoteElement = document.querySelector('#quote');
// Sélectionne l'élément HTML où l'auteur de la citation sera affiché
const authorElement = document.querySelector('#author');

// URL de l'API utilisée pour récupérer des citations aléatoires
const api = 'https://api.quotable.io/random';

// Fonction pour récupérer une citation aléatoire de l'API
function getQuote() {
  // Utilise la méthode fetch pour effectuer une requête GET à l'API
  fetch(api)
    .then(response => response.json()) // Récupère la réponse sous forme de JSON
    .then(data => {
      // Met à jour le texte de l'élément HTML de la citation avec la citation récupérée
      quoteElement.textContent = `"${data.content}"`;
      // Met à jour le texte de l'élément HTML de l'auteur avec l'auteur récupéré
      authorElement.textContent = `- ${data.author}`;
    })
    .catch(error => console.error(error)); // Gère les erreurs de requête
}

// Appelle la fonction pour récupérer une citation au chargement de la page
getQuote();

// Sélectionne le bouton pour afficher une nouvelle citation
const buttonElement = document.querySelector('#new-quote-button');

// Ajoute un écouteur d'événement pour le clic sur le bouton "Nouvelle citation"
buttonElement.addEventListener('click', () => {
  // Ajoute une classe CSS pour créer une animation sur la citation
  quoteElement.classList.add('animate-pulse');
  // Appelle la fonction pour récupérer une nouvelle citation
  getQuote();
  // Supprime la classe CSS après un court délai
  setTimeout(() => {
    quoteElement.classList.remove('animate-pulse');
  },500);
});



// Sélectionne les éléments HTML où le défi sera affiché
const challengeElement = document.querySelector('#activity');
const typeElement = document.querySelector('#type');
const participantsElement = document.querySelector('#participants');

// Sélectionne le bouton pour afficher un nouveau défi
const btn = document.querySelector('#new-challenge-button');

// URL de l'API utilisée pour récupérer des défis aléatoires
const api2 = 'https://www.boredapi.com/api/activity/';

// Fonction pour récupérer un défi aléatoire de l'API
function getChallenge() {
  // Utilise la méthode fetch pour effectuer une requête GET à l'API
  fetch(api2)
    .then(response => response.json()) // Récupère la réponse sous forme de JSON
    .then(data => {
      // Met à jour le texte de l'élément HTML du défi avec le défi récupéré
      challengeElement.textContent = data.activity;
      // Met à jour le texte de l'élément HTML du type de défi avec le type récupéré
      typeElement.textContent = `Type: ${data.type}`;
      // Met à jour le texte de l'élément HTML du nombre de participants nécessaires avec les données récupérées
      participantsElement.textContent = `Participants: ${data.participants}`;
    })
    .catch(error => console.error(error)); // Gère les erreurs de requête
}

// Appelle la fonction pour récupérer un défi au chargement de la page
getChallenge();


// ajoute un événement de click au bouton
btn.addEventListener('click', () => {
  // ajoute la classe "animate-pulse" à l'élément contenant le défi pour une animation
  challengeElement.classList.add('animate-pulse');
  // appel à la fonction getChallenge() pour récupérer un nouveau défi aléatoire
  getChallenge();
  // utilise setTimeout pour enlever la classe "animate-pulse" après une courte durée (500ms dans ce cas)
  setTimeout(() => {
  challengeElement.classList.remove('animate-pulse');
  },500)
  });
