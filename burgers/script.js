import {burgerList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)
const container = document.querySelector('#burger-container')



// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console
burgerList.forEach(burger => {
  console.log(burger.nom);
});


// Etape 2
// Dans #burger-container afficher le nom des burgers
burgerList.forEach(burger => {
  container.innerHTML += `<h3>${burger.nom}</h3>`;

});

// Etape 3 
// Ajouter la description et le prix 
burgerList.forEach(burger => {
  container.innerHTML += `
    <p>${burger.description}</p>
    <p>Prix : ${burger.prix} €</p>
  `;

});

// Etape 4 
// Afficher l'image du burger
burgerList.forEach((burger) => {
  container.innerHTML += `
    <img src="${burger.img}">
  `
})

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js


// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 


// Etape 8 (Bonus)
// Afficher la liste des ingrédients
burgerList.forEach(burger => {
  container.innerHTML += `
    <ul>
      ${burger.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
  `
});

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

burgerList.forEach(burger => {
  container.innerHTML += `
    <div class="flex flex-col lg:flex-row gap-4 p-4 mb-2 bg-black rounded-lg shadow-md h-80">
      <div class="w-full lg:w-1/3 h-full">
        <img src="${burger.img}" class="rounded-lg h-full object-cover">
      </div>
      <div class="w-full lg:w-2/3 h-full">
        <h3 class="text-2xl font-bold mb-2">${burger.nom}</h3>
        <p class="text-gray-300 pb-4">${burger.description}</p>
        <ul class="list-disc pl-4 h-full pt-9">
          ${burger.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <p class="text-lg font-bold pt-6">Prix : ${burger.prix} €</p>
      </div>
    </div>
  `;
});

