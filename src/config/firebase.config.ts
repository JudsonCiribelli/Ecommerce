import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBZ6oFR5C75xEMuxpIMdmqlxPHTdfHm5TA',
  authDomain: 'clothing-ecommerce-dd1ef.firebaseapp.com',
  projectId: 'clothing-ecommerce-dd1ef',
  storageBucket: 'clothing-ecommerce-dd1ef.firebasestorage.app',
  messagingSenderId: '541705371767',
  appId: '1:541705371767:web:80f8613e4c3792f5ed0672'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
