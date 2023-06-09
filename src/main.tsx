import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import '../public/fonts/Roboto-Black.ttf'
import '../public/fonts/Roboto-Bold.ttf'
import '../public/fonts/Roboto-Light.ttf'
import '../public/fonts/Roboto-Thin.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
