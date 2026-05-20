import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './Message.jsx'
import Home from './Home.jsx'
import Logo from './Logo.jsx'
import Contactos from './Contactos.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Message/>
    <Contactos/>
    <Logo/>
    <Home/>
    <App />
    <Footer/>
  </StrictMode>,
)
