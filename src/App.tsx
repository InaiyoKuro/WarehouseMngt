import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (
    <div className='container'>
      <header>Warehouse Management</header>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App