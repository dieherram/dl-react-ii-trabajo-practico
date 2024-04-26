import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import PizzasProvider from './context/PizzasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <App />
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
