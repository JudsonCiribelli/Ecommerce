//Bibliotecas
import React, { useContext } from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/Home/Home.page'
import LoginPage from './Components/Pages/Login/login.page'
import SignUpPage from './Components/Pages/sign-up/sign-up-page'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
//Pages

const App: FunctionComponent = () => {
  const { currentUser } = useContext(UserContext)
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
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
