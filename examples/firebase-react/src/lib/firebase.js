// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  onSnapshot
 } from 'firebase/firestore'

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
const db = getFirestore(app)


export const onSnapshotCollection = onSnapshot

export function getCollection(collectionName) {
  return collection(db, collectionName)
}


export async function getProducts() {
  const productsRef = getCollection('products')
  const snapshot = await getDocs(productsRef)

  const docList = snapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })

  return docList
}


export async function createProduct(data) {
  const productsRef = getCollection('products')
  const docRef = await addDoc(productsRef, data)

  const doc = await getDoc(docRef)

  return {
    id: doc.id,
    ... doc.data()
  }
}
