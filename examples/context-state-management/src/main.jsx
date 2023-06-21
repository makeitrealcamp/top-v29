import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './store';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
