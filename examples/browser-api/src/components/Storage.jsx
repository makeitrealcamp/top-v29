
// Metodos del localStorage
// almacen datos en el navegador del usuario con la forma clave:valor

// localStorage.setItem('clave', 'valor') -> Guarda un valor en el localStorage
// localStorage.getItem('clave') -> Obtiene un valor del localStorage
// localStorage.removeItem('clave') -> Elimina un valor del localStorage
// localStorage.clear() -> Elimina todos los valores del localStorage


// Metodos del SessionStorage

// sessionStorage.setItem('clave', 'valor') -> Guarda un valor en el sessionStorage
// sessionStorage.getItem('clave') -> Obtiene un valor del sessionStorage
// sessionStorage.removeItem('clave') -> Elimina un valor del sessionStorage
// sessionStorage.clear() -> Elimina todos los valores del sessionStorage

const preferencesUser = {
  name: 'Juan',
  theme: 'dark',
  lang: 'es',
}


const StorageApiExample = () => {
  localStorage.setItem('preferences', JSON.stringify(preferencesUser))
  return(
    <div>
      <h1>Storage Browser Api</h1>
    </div>
  )
}

export default StorageApiExample
