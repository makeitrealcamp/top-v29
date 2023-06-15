import { useState } from 'react';

import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los datos del formulario usando FormData -> FormData.entries()
    const formData = new FormData(e.target);

    // Convertir FormData a un objeto
    const data = Object.fromEntries(formData);

    // Convertir FormData a un objeto
    // const data = Array.from(formData.entries()).reduce((acc, [key, value]) => {
    //   acc[key] = value;
    //   return acc;
    // }, {});

    console.log('🚀 ~ file: App.jsx:15 ~ handleSubmit ~ data:', data);
  };

  return (
    <div>
      <h1>FOrm with formData</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="password" name="password" />
        <input type="number" name="age" />

        <button type="submit">Enviar</button>
      </form>

      {/* <img
        src="https://res.cloudinary.com/dbzjtuxkn/image/upload/v1686837731/upload-images/1051a4ef7c2d3c48adf13188b5717f50.jpg"
        alt=""
      /> */}
      <hr />
    </div>
  );
}

export default App;
