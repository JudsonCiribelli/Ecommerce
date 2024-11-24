import React from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
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
          <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
          <HeaderItem onClick={handleSignUpPageClick}>Criar conta</HeaderItem>
          <HeaderItem>
            <FaCartShopping size={25} />6
          </HeaderItem>
        </HeaderItems>
      </div>
    </HeaderContainer>
  )
}

export default Header
