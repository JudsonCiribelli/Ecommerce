import Product from '../../../types/product.types'
import CartActionsCart from './cart.actions-types'

export const ToggleCart = () => ({
  type: CartActionsCart.toggleCart
})

export const AddProductToCart = (payload: Product) => ({
  type: CartActionsCart.addProductToCart,
  payload
})

export const RemoveProductFromCart = (payload: string) => ({
  type: CartActionsCart.removeProductFromCart,
  payload
})

export const IncreaseCartProductQuantity = (payload: string) => ({
  type: CartActionsCart.increaseCartProductQuantity,
  payload
})

export const DecreaseCartProductQuantity = (payload: string) => ({
  type: CartActionsCart.decreaseCartProductQuantity,
  payload
})

export const ClearCartProducts = () => ({
  type: CartActionsCart.clearCartProducts
})
