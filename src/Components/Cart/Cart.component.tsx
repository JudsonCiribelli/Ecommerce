import { FunctionComponent } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/redux.hooks'
import { useDispatch } from 'react-redux'
//Utilities
import { ToggleCart } from '../../Store/reducers/Cart/cart.actions'
import {
  selectProductsCount,
  selectProductsTotalPrice
} from '../../Store/reducers/Cart/cart.selectors'
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
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selectProductsCount)
  const { isVisible, products } = useAppSelector((state) => state.CartReducer)

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
