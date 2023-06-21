import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterProvider } from './components/CounterAdv/Context';
// import { ThemeProvider } from './components/Theme/ThemeContext.jsx'

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
);
