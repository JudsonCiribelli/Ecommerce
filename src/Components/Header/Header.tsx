import React, { useContext } from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
//Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
//Utilities
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)
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
            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
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
