import React from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div className='header-items-container'>
        <HeaderTitle>JC Clothing</HeaderTitle>
        <HeaderItems>
          <HeaderItem>Explorar</HeaderItem>
          <HeaderItem>Login</HeaderItem>
          <HeaderItem>Criar conta</HeaderItem>
          <HeaderItem>
            <FaCartShopping size={25} />6
          </HeaderItem>
        </HeaderItems>
      </div>
    </HeaderContainer>
  )
}

export default Header
