import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'font-body text-sm',
          style: {
            background: '#10121f',
            color: '#f1f3f9',
            border: '1px solid #1a1d2e',
          },
        }}
      />
    </HelmetProvider>
  </React.StrictMode>
)
