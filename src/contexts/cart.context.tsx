import React, { createContext, useState, ReactNode } from 'react'
import CartProduct from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext | undefined>(undefined)

interface CartContextProviderProps {
  children: ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const value = { isVisible, setIsVisible, products, toggleCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
