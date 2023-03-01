import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCHP984rLSKj1_xs7bZOmhgjgbcUm_p0nk",
    authDomain: "parking-slot-382c0.firebaseapp.com",
    projectId: "parking-slot-382c0",
    storageBucket: "parking-slot-382c0.appspot.com",
    messagingSenderId: "112872716320",
    appId: "1:112872716320:web:7e46d7c0764275176e6445",
    measurementId: "G-41GXR3ER73"
}

// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
// generate & export auth object
export const auth = getAuth()