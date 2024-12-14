import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'
//Utilities
import { CartContext } from '../../contexts/cart.context'
//Styles
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './Checkout.styles'
//Components
import CustomButton from '../custom-button/custom-button-component'
import CartItemComponent from '../Cart-Item/Cart-item.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutTitle>CheckOut</CheckoutTitle>

      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {/* Produtos*/}
            {products.map((product) => (
              <CartItemComponent product={product} key={product.id} />
            ))}
          </CheckoutProducts>

          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>
          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio</p>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
