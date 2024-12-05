import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login/Login'
import { Route, Router, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>      
        <Route path='/' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
