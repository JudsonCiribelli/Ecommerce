//Bibliotecas
import React from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/Home/Home.page'
import LoginPage from './Components/Pages/Login/login.page'
//Pages

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
