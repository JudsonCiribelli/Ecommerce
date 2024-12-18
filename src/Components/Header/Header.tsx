import React from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

//Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
//Utilities
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { LogouUser } from '../../Store/reducers/user/user.actions'
import { ToggleCart } from '../../Store/reducers/Cart/cart.actions'
import { useAppSelector } from '../../Hooks/redux.hooks'
import { selectProductsCount } from '../../Store/reducers/Cart/cart.selectors'

const Header = () => {
  const navigate = useNavigate()
  const productsCount = useAppSelector(selectProductsCount)
  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSignUpPageClick = () => {
    navigate('/signUp')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSigOutClick = () => {
    dispatch(LogouUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(ToggleCart())
  }

  return (
    <HeaderContainer>
      <div className='header-items-container'>
        <HeaderTitle onClick={handleLogoClick}>JC Clothing</HeaderTitle>
        <HeaderItems>
          <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
          {!isAuthenticated && (
            <>
              <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
              <HeaderItem onClick={handleSignUpPageClick}>
                Criar conta
              </HeaderItem>
            </>
          )}
          {isAuthenticated && (
            <HeaderItem onClick={handleSigOutClick}>Sair</HeaderItem>
          )}
          <HeaderItem onClick={handleCartClick}>
            <FaCartShopping size={25} />
            <p style={{ marginLeft: 5 }}>{productsCount}</p>
          </HeaderItem>
        </HeaderItems>
      </div>
    </HeaderContainer>
  )
}

export default Header
