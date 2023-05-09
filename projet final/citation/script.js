// Importation des modules nécessaires pour interagir avec Firestore
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  doc
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_qA0iDFdCacTV_q3IsyGe5sq5pRFBbv4",
  authDomain: "last-38a9d.firebaseapp.com",
  projectId: "last-38a9d",
  storageBucket: "last-38a9d.appspot.com",
  messagingSenderId: "399234333329",
  appId: "1:399234333329:web:76e08bfdad16a8b1a8dd30"
};

// Initialisation de Firebase
initializeApp(firebaseConfig)

// Initialisation des services
const db = getFirestore()

// Référence à la collection "citations"
const colRef = collection(db, 'citations')

// Définition de la requête pour trier les citations par date de création
const q = query(colRef, orderBy('createdAt'))

// Récupération des données de la collection en temps réel
onSnapshot(q, (snapshot) => {
  let citations = []
  snapshot.docs.forEach(doc => {
    citations.push({ ...doc.data(), id: doc.id })
  })
  console.log(citations)
})

// Ajout d'une citation dans la collection
const addCitationForm = document.querySelector('#add')
addCitationForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const areaValue = addCitationForm.area.value
  const authorValue = addCitationForm.author.value

  if (areaValue.split(' ').length < 2) {
    alert('Le texte de la citation doit contenir au moins 2 mots')
    return
  }

  if (authorValue.length < 3) {
    alert('Le nom de l\'auteur doit contenir au moins 3 caractères')
    return
  }

  addDoc(colRef, {
    title: areaValue,
    author: authorValue,
    createdAt: serverTimestamp()
  })
    .then(() => {
      addCitationForm.reset()
      const addingCitationMessage = `Thanks, the quote was successfully added!`
      alert(addingCitationMessage)
    })
})

// Récupération d'un document unique de la collection en temps réel
const docRef = doc(db, 'citations', 'o3QtMBkxXkRiZtIEfuR1')
onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})
