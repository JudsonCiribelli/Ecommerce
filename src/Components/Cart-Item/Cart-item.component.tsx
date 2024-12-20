import { FunctionComponent, useContext } from 'react'
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
import { CartContext } from '../../contexts/cart.context'

interface CartItemProps {
  product: CartProduct
}
const CartItemComponent: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    RemoveProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleRemoveClick = () => {
    RemoveProductFromCart(product.id)
  }
  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id)
  }
  const handleDecreaseClicl = () => {
    decreaseProductQuantity(product.id)
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClicl} />
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
