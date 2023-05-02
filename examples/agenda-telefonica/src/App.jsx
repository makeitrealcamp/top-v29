import { useState } from 'react';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import { contacts as contactList } from './assets/data';

import './App.css'


function App() {

  debugger
  
  const [contacts, setContacts] = useState(contactList);
  const [Cargando, setCargando] = useState(false)


  const handleGetContacts=() =>{
    setCargando(true)

      fetch('https://jsonplaceholder.typicode.com/users/') //petición http get
      .then((res) => res.json())
      .then((data)=>{
        setContacts(data); 
        setTimeout(()=>{
          setCargando(false)

        },3000)
        
      })
      .catch((error)=>{console.log(error)})
      
  }

  const handleCreateContact=()=>{   
    fetch('https://jsonplaceholder.typicode.com/users/',{
      method:'POST',
      body:JSON.stringify({
        id: 1,
        name: 'Alex',
        username: "Herrera",
        email: "prueba@april.biz",
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))

    .catch((error)=>{console.log(error)})
  }

  const handleUpdateContact=()=>{
    fetch('https://jsonplaceholder.typicode.com/users/',{
      method: 'PUT',
      body: JSON.stringify({
        id: 11,
        name: 'Alexander',
        username: "rodriguez",
        email: "pruebUPdate@april.biz",
      }),
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      },
    })
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>{console.log(error)})
  }
  const handleDeleteContact=()=>{
   /* fetch('https://jsonplaceholder.typicode.com/users/1',{
      method:'DELETE',
    }),
   */
  }


  


  const handleAddcontact=(newContact)=>{
  
    setContacts(
      [
        ...contacts,
        newContact
      ]
    )
  }

  if(Cargando==true){
    return(
      <>
         <h1>Lista de Contactos</h1>
          <h1>Cargando...</h1>
      </>
    )
  }else{
  return (  
    <div>
      <h1>Lista de Contactos</h1>
    <ContactForm onAddContact={handleAddcontact}/>
    <ContactList contacts={contacts}/>
     <button onClick={handleGetContacts}>Leer</button>
     <button >Leer uno</button>
     <button onClick={handleCreateContact}>Agregar</button>
     <button onClick={handleUpdateContact}>Modificar</button>
     <button onClick={handleDeleteContact}>Eliminar</button>
     
    </div>
  )
}
}

export default App
