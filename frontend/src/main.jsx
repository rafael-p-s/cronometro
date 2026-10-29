// import { StrictMode } from 'react' // React faz testes para testar as montagens de hooks e outras funções.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  /*<StrictMode>*/
    <App />
  /*</StrictMode>,*/
)
