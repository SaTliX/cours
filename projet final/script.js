// Récupération des données via Fetch
const URL_JSON = "chemin/vers/votre/fichier.json";
function recupererUtilisateurs() {
    return fetch(URL_JSON)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur de récupération des utilisateurs");
        }
        return response.json();
      })
      .then(data => data.utilisateurs);
  }

  function validerConnexion() {
    // Récupérer les valeurs entrées par l'utilisateur
    const nomUtilisateur = document.getElementById("nomUtilisateur").value;
    const motDePasse = document.getElementById("motDePasse").value;
  
    // Récupérer les utilisateurs depuis le fichier JSON
    recupererUtilisateurs()
      .then(utilisateurs => {
        // Vérifier si les informations d'identification sont valides
        const utilisateurValide = utilisateurs.find(utilisateur => {
          return utilisateur.nomUtilisateur === nomUtilisateur &&
                 utilisateur.motDePasse === motDePasse;
        });
  
        // Si les informations d'identification sont valides, rediriger l'utilisateur vers la page de succès
        if (utilisateurValide) {
          window.location.href = "succes.html";
        } else {
          // Sinon, afficher un message d'erreur
          document.getElementById("messageErreur").innerText = "Nom d'utilisateur ou mot de passe incorrect.";
        }
      })
      .catch(error => {
        // Si une erreur se produit, afficher un message d'erreur
        document.getElementById("messageErreur").innerText = error.message;
      });
  }
  
  

  // Validation du formulaire de connexion
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (usernameInput.value === '' || passwordInput.value === '') {
    passwordInput.classList.add('border-red-500');
    passwordInput.nextElementSibling.style.display = 'block';
  } else {
    // Envoyer la requête de connexion à l'API
  }
});

// Enlever les messages d'erreur quand les champs sont remplis
usernameInput.addEventListener('input', () => {
  usernameInput.classList.remove('border-red-500');
});
passwordInput.addEventListener('input', () => {
  passwordInput.classList.remove('border-red-500');
  passwordInput.nextElementSibling.style.display = 'none';
});
