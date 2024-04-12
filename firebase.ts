
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGWXKnDqfG5VsD69GDkyCieQutv_5OlyY",
    authDomain: "richflix-48501.firebaseapp.com",
    projectId: "richflix-48501",
    storageBucket: "richflix-48501.appspot.com",
    messagingSenderId: "822420806559",
    appId: "1:822420806559:web:d30d2a982b695087ff7baa"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }