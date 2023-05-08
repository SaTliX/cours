import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import {
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc
} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
const firebaseConfig = {
    apiKey: "AIzaSyCRWO-9jNND-uBTgnx95NT7A7Qj2lBEGQE",
    authDomain: "projet-final-56670.firebaseapp.com",
    projectId: "projet-final-56670",
    storageBucket: "projet-final-56670.appspot.com",
    messagingSenderId: "736823710598",
    appId: "1:736823710598:web:aca3126707a5add4265207"
  };

  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'citation')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let citation = []
    snapshot.docs.forEach(doc => {
      citation.push({ ...doc.data(), id: doc.id })
    })
    console.log(citation)
  })
  .catch(err => {
    console.log(err.message)
  })

  // adding docs
const addCitationForm = document.querySelector('.add')
addCitationForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addCitationForm.title.value,
    author: addCitationForm.author.value,
  })
  .then(() => {
    addCitationForm.reset()
  })
})

// deleting docs
const deleteCitationForm = document.querySelector('.delete')
deleteCitationForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'citation', deleteCitationForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteCitationForm.reset()
    })
})