import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
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

const CartComponent: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  const handleEscapeAreaClick = () => {
    toggleCart()
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
