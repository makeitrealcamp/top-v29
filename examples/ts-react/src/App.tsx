import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Button from './components/Button'


function App() {

  return (
    <>
     <Card
      title='Mi primer tsx'
      description='Aprendiendo React con Typescript'
      numVote="10"
     />

     <Button>
        <span>Click me</span>
     </Button>
    </>
  )
}

export default App
