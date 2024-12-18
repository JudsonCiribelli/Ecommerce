import React, { useContext } from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
//Utilities
import { CartContext } from '../../contexts/cart.context'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { LogouUser } from '../../Store/reducers/user/user.actions'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const { productsCount, toggleCart } = useContext(CartContext)

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
          <HeaderItem onClick={toggleCart}>
            <FaCartShopping size={25} />
            <p style={{ marginLeft: 5 }}>{productsCount}</p>
          </HeaderItem>
        </HeaderItems>
      </div>
    </HeaderContainer>
  )
}

export default Header
