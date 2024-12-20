//Bibliotecas
import React, { useEffect, useState, useContext } from 'react'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'

//Pages
import HomePage from './Components/Pages/Home/Home.page'
import LoginPage from './Components/Pages/Login/login.page'
import SignUpPage from './Components/Pages/sign-up/sign-up-page'
import ExplorePage from './Components/Pages/explore/explore.page'
//utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { userConverter } from './convertes/firebase.convertes'
//Components
import Loading from './Components/loading/loading.component'
import CategoryDetailsPage from './Components/Pages/Category-details-page/Category-details-page'
import CartComponent from './Components/Cart/Cart.component'
import CheckOutPage from './Components/Pages/Checkout/Checkout.page'
import AuthenticationGuard from './Guards/Authentication.guards'
import PaymentConfirmationPage from './Components/Pages/payment-confirmation/Payment-Confirmation.Page'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSigningOut = isAuthenticated && !user

      if (isSigningOut) {
        logoutUser()
        return setIsInitializing(false)
      }
      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()
        loginUser(userFromFirestore)

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [isAuthenticated])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/category/:id' element={<CategoryDetailsPage />} />
        <Route
          path='/checkout'
          element={
            <AuthenticationGuard>
              <CheckOutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path='/payment-confirmation'
          element={<PaymentConfirmationPage />}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
      </Routes>
      <CartComponent />
    </BrowserRouter>
  )
}
export default App
