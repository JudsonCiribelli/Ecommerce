import { FunctionComponent } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
//Utilities
import CartProduct from '../../types/cart.types'
//Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './Cart-item.styles'
import { useDispatch } from 'react-redux'
import {
  DecreaseCartProductQuantity,
  IncreaseCartProductQuantity,
  RemoveProductFromCart
} from '../../Store/reducers/Cart/cart.actions'

interface CartItemProps {
  product: CartProduct
}
const CartItemComponent: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(RemoveProductFromCart(product.id))
  }

  const handleIncreaseClick = () => {
    dispatch(IncreaseCartProductQuantity(product.id))
  }
  const handleDecreaseClick = () => {
    dispatch(DecreaseCartProductQuantity(product.id))
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}
export default CartItemComponent
