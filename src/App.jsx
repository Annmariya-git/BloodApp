import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonor from './components/AddDonor'
import ViewAllDonors from './components/ViewAllDonors'
import NavDonors from './components/NavDonors'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddDonor />}/>
    <Route path='/View' element={<ViewAllDonors />}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
