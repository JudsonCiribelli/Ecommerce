//Bibliotecas
import React from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/Home/Home.page'
import LoginPage from './Components/Pages/Login/login.page'
import SignUpPage from './Components/Pages/sign-up/sign-up-page'
//Pages

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
