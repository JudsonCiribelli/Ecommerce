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

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSignUpPageClick = () => {
    navigate('/signUp')
  }
  return (
    <HeaderContainer>
      <div className='header-items-container'>
        <HeaderTitle>JC Clothing</HeaderTitle>
        <HeaderItems>
          <HeaderItem>Explorar</HeaderItem>
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
          <HeaderItem>
            <FaCartShopping size={25} />6
          </HeaderItem>
        </HeaderItems>
      </div>
    </HeaderContainer>
  )
}

export default Header
