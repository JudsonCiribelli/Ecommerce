import React from 'react'
import './Header.styles.css'
import { FaCartShopping } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-items-container'>
        <h2 className='header-title'> CLUB CLOTHING</h2>
        <div className='header-items'>
          <div className='header-item'>Explorar</div>
          <div className='header-item'>Login</div>
          <div className='header-item'>Criar conta</div>
          <div className='header-item'>
            <FaCartShopping size={25} />6
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
