// #1 écouter le changement de text sur l'input
const input = document.querySelector('#input');
const counter = document.querySelector('#counter');

console.log('input', input)

input.addEventListener('keyup', () => {
    const car = input.value.split('')
    const nbCar = car.length
    counter.innerHTML = nbCar
    console.log(nbCar)

})

// #2 récupérer la valeur de l'input et mettre à jour le nombre de caractères

// #3 si le nombre de caractères est supérieur à 50 empécher l'utilisateur d'écrire