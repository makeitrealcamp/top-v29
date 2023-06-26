import React from 'react';
import ReactDOM from 'react-dom/client';
import { VotingProvider } from './store';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VotingProvider>
      <App />
    </VotingProvider>
  </React.StrictMode>,
);

//  monta el componente y lo desmonta -> para verificar todo el cilco de vida de ese componente -> MODO DESARROLLO
