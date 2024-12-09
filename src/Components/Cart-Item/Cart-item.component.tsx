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

interface CartItemProps {
  product: CartProduct
}
const CartItemComponent: FunctionComponent<CartItemProps> = ({ product }) => {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} />
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}
export default CartItemComponent
