import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCLjU0_rQ1bB6gJI1UxU6jy4giqq3uuuZ8",
  authDomain: "dopamina-60293.firebaseapp.com",
  projectId: "dopamina-60293",
  storageBucket: "dopamina-60293.appspot.com",
  messagingSenderId: "404192927078",
  appId: "1:404192927078:web:c953b730900abd636b7ca7",
  measurementId: "G-HD54HEBPK7"
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()
export { db, auth }