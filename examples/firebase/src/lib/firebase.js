// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2b7PyKmOw2k321DNKMjNG6cblNWIZLXE",
  authDomain: "top-v29.firebaseapp.com",
  projectId: "top-v29",
  storageBucket: "top-v29.appspot.com",
  messagingSenderId: "738462295008",
  appId: "1:738462295008:web:b09da8788a966acded0185",
  measurementId: "G-1P9QYCK6ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


export async function getProducts() {
  const productsRef = db.collection('products')
  const snapshot = await productsRef.get()

  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}
