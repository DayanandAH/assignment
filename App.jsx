import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './style.css'
import Home from './Home'
import Table from './table'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
     
      <div>
      <Home/>
      <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/My Orders" element={<Table/>}/>
  </Routes>
      </div>
    </div>
  )
}

export default App
