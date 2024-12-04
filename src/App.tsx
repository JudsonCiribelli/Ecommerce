//Bibliotecas
import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
//Pages
import HomePage from './Components/Pages/Home/Home.page'
import LoginPage from './Components/Pages/Login/login.page'
import SignUpPage from './Components/Pages/sign-up/sign-up-page'
//utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setIsInitializing] = useState(true)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      logoutUser()
      return setIsInitializing(false)
    }
    const isSigningIn = !isAuthenticated && user
    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnapshot.docs[0]?.data()

      return setIsInitializing(false)
    }

    return setIsInitializing(false)
  })

  console.log({ isAuthenticated })

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
