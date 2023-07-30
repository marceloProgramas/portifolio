import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Global from './style/Global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global/>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
    <App />
  </React.StrictMode>,
)
