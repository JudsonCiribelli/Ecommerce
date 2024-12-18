import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'
import CartActionsCart from './cart.actions-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
  productsTotalPrice: number
  productsCount: number
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
  productsTotalPrice: 0,
  productsCount: 0
}
const CartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CartActionsCart.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    case CartActionsCart.addProductToCart: {
      const product = action.payload

      const productIsAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }
    default:
      return { ...state }
  }
}

export default CartReducer
