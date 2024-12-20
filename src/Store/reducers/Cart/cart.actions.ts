import Product from '../../../types/product.types'
import CartActionTypes from './cart.actions-types'

export const ToggleCart = () => ({
  type: CartActionTypes.toggleCart
})

export const AddProductToCart = (payload: Product) => ({
  type: CartActionTypes.addProductToCart,
  payload
})

export const RemoveProductFromCart = (payload: string) => ({
  type: CartActionTypes.removeProductFromCart,
  payload
})

export const IncreaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.increaseCartProductQuantity,
  payload
})

export const DecreaseCartProductQuantity = (payload: string) => ({
  type: CartActionTypes.decreaseCartProductQuantity,
  payload
})

export const ClearCartProducts = () => ({
  type: CartActionTypes.clearCartProducts
})
