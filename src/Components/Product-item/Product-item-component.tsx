import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

//Utilities
import Product from '../../types/product.types'
import { CartContext } from '../../contexts/cart.context'
//Styles
import { ProductContainer, ProductImage, ProductInfo } from './Product-styles'
//Components
import CustomButton from '../custom-button/custom-button-component'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
export default ProductItem
