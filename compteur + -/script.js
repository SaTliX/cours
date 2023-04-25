// #1 écouter le changement de text sur l'input
const moinsButton = document.getElementById("moins");
const plusButton = document.getElementById("plus");
const compteurSpan = document.getElementById("compteur");

let compteur = 0;

moinsButton.addEventListener("click", () => {
    if (compteur > 0) { // Vérifie si le compteur est supérieur à zéro
        compteur--;
        if (compteur < 10) { // Vérifie si le compteur est inférieur à 10
          compteurSpan.style.color = 'red';
        } else {
          compteurSpan.style.color = 'black'; // Réinitialise la couleur à noire
        }
        compteurSpan.textContent = compteur;
      }
});

plusButton.addEventListener("click", () => {
    if (compteur < 20) { // Vérifie si le compteur est inférieur à 20
        compteur++;
        if (compteur > 10) { // Vérifie si le compteur est supérieur à 10
          compteurSpan.style.color = 'green';
        } else {
          compteurSpan.style.color = 'black'; // Réinitialise la couleur à noire
        }
        compteurSpan.textContent = compteur;
      }
});