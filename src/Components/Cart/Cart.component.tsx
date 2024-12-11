import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
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

const CartComponent: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* Produtos*/}
        <CartTotal>Total: R$ 999</CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}
export default CartComponent
