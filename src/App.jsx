import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router'
import Home from './components/Home/Home'
import Expense from './components/Home/component/Expense'
import Income from './components/Home/component/Income'
import Visualization from './components/Home/component/Visualization'

function App() {

  return (
    <>
    <Home/>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path="/expense" element={<Expense/>}/>
      <Route path='/income' element={<Income/>}/>
      <Route path="/visualization" element={<Visualization/>}/>
    </Routes>
      
    </>
  )
}

export default App
