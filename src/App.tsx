//Bibliotecas
import React from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/Home/Home.page'
//Pages

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
