import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/Context.jsx'
import CartContext from './context/cartContext.jsx'
import Layout from './layouts/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <CartContext>
    <ContextProvider>
    <App />
    </ContextProvider>
    </CartContext>
    </BrowserRouter>
)
