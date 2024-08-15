import React from 'react'
import ReactDOM from 'react-dom/client'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import'./tutor.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <First/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
  </React.StrictMode>,
)
