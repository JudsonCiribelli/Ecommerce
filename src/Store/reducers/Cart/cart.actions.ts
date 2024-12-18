import Product from '../../../types/product.types'
import CartActionsCart from './cart.actions-types'

export const ToggleCart = () => ({
  type: CartActionsCart.toggleCart
})

export const AddProductToCart = (payload: Product) => ({
  type: CartActionsCart.addProductToCart,
  payload
})
