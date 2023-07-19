import { useState, useEffect } from 'react'

import { getProducts, onSnapshotCollection, getCollection } from './lib/firebase'
import List from './components/List'
import Form from './components/Form'

import './App.css'

function App() {
  const [list, setList] = useState([])

  const getOnSnapshotDataCollection = async () => {
    const colRef = getCollection('products')

    const unSubscribe = onSnapshotCollection(colRef, (snapshot) => {
      const docList = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })


      setList(docList)
    })

    return unSubscribe
  }

  useEffect(() => {
    getOnSnapshotDataCollection()
  }, [])

  return (
    <>
      <h1>Products</h1>
      <Form />
      <List  products={list} />
    </>
  )
}

export default App
