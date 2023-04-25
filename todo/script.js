const defaultTodo = [
    {done: true, name: "tache1"},
    {done: true, name: "tache2"},
]

const displayTodos = (listTodo) => {

}


// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new
const btn= document.querySelector('#add')
const container= document.querySelector('#containe-list')
const input = document.querySelector('#new')


// #2 Afficher les todos dans le container avec une fonction displayTodos

console.log(defaultTodo)
const displayTodo(list)
defaultTodo.forEach(task => {
    container.innerHTML += '<div class="p-2 bg-slate-700 rounded mt-2">${task.name}</div>'
    
});


// #3 Ajouter un event listener sur le bouton pour ajouter un todo


// BONUS

// #5 Faire un filtre 

// #6 Suprimer un éléments

// #4 Cocher les checkbox pour marquer un todo comme fait