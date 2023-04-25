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
  const burgerNom = document.createElement('div');
  burgerNom.innerHTML = `<h3>${burger.nom}</h3>`;
  container.appendChild(burgerNom);
});

// Etape 3 
// Ajouter la description et le prix 
burgerList.forEach(burger => {
  const burgerDescPrix = document.createElement('div');
  burgerDescPrix.innerHTML = `
    <h3>${burger.nom}</h3>
    <p>${burger.description}</p>
    <p>Prix : ${burger.prix} €</p>
  `;
  container.appendChild(burgerDescPrix);
});

// Etape 4 
// Afficher l'image du burger
burgerList.forEach((burger) => {
  const burgerDiv = document.createElement('div')
  burgerDiv.innerHTML = `
    <h3>${burger.nom}</h3>
    <p>${burger.description}</p>
    <p>${burger.prix} €</p>
  `
  const burgerImg = document.createElement('img')
  burgerImg.src = burger.img
  burgerDiv.appendChild(burgerImg)

  container.appendChild(burgerDiv)
})

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js


// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 


// Etape 8 (Bonus)
// Afficher la liste des ingrédients
burgerList.forEach(burger => {
  const burgerIng = document.createElement('div');
  burgerIng.innerHTML = `
    <ul>
      ${burger.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
  `;
  container.appendChild(burgerIng);
});

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

burgerList.forEach(burger => {
  const burgerDiv = document.createElement('div')
  burgerDiv.classList.add('flex', 'flex-row', 'items-center', 'my-4', 'bg-gray-600')

  const burgerImg = document.createElement('img')
  burgerImg.src = burger.img
  burgerImg.classList.add('pl-2','w-48', 'h-48', 'object-cover', 'mr-4')

  const burgerDesc = document.createElement('div')
  burgerDesc.classList.add('flex', 'flex-col', 'justify-center')

  const burgerNom = document.createElement('h3')
  burgerNom.classList.add('text-2xl', 'font-bold', 'mb-2')
  burgerNom.innerText = burger.nom

  const burgerDescr = document.createElement('p')
  burgerDescr.classList.add('text-lg', 'text-black', 'mb-4')
  burgerDescr.innerText = burger.description

  const burgerPrix = document.createElement('p')
  burgerPrix.classList.add('text-xl', 'text-black', 'font-bold')
  burgerPrix.innerText = `Prix : ${burger.prix} €`

  const burgerIngredients = document.createElement('ul')
  burger.ingredients.forEach(ingredient => {
    const burgerIngredient = document.createElement('li')
    burgerIngredient.classList.add('text-lg', 'text-black-700')
    burgerIngredient.innerText = ingredient
    burgerIngredients.appendChild(burgerIngredient)
  })

  burgerDesc.appendChild(burgerNom)
  burgerDesc.appendChild(burgerDescr)
  burgerDesc.appendChild(burgerPrix)
  burgerDesc.appendChild(burgerIngredients)

  burgerDiv.appendChild(burgerImg)
  burgerDiv.appendChild(burgerDesc)

  container.appendChild(burgerDiv)
})



