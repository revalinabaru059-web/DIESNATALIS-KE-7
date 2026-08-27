import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx' // <--- PENTING: Tanpa kurung kurawal { }
import './index.css'

// Kita cari elemen 'app' (bawaan preact) atau 'root' (bawaan react)
const rootElement = document.getElementById('app') || document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Error: Tidak menemukan elemen ID 'app' atau 'root' di index.html");
}