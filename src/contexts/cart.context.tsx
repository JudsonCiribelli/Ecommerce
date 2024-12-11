import React, { createContext, useState, ReactNode } from 'react'
//Utilities
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

interface CartContextProviderProps {
  children: ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product) => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const value = {
    isVisible,
    setIsVisible,
    products,
    toggleCart,
    addProductToCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider
