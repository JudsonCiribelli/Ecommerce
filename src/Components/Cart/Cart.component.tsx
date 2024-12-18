import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/redux.hooks'
import { useDispatch } from 'react-redux'
//Utilities
import { CartContext } from '../../contexts/cart.context'
//Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './Cart.styles'
//Components
import CustomButton from '../custom-button/custom-button-component'
import CartItemComponent from '../Cart-Item/Cart-item.component'
import { ToggleCart } from '../../Store/reducers/Cart/cart.actions'

const CartComponent: FunctionComponent = () => {
  const { isVisible, products } = useAppSelector((state) => state.CartReducer)
  const { productsTotalPrice, productsCount } = useContext(CartContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    dispatch(ToggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(ToggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* Produtos*/}
        {products.map((products) => (
          <CartItemComponent product={products} key={products.id} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R$:{productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleGoToCheckoutClick}
          >
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}
export default CartComponent
