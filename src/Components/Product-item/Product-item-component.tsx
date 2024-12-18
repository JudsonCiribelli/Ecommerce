import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
//Utilities
import Product from '../../types/product.types'
import { AddProductToCart } from '../../Store/reducers/Cart/cart.actions'
//Styles
import { ProductContainer, ProductImage, ProductInfo } from './Product-styles'
//Components
import CustomButton from '../custom-button/custom-button-component'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(AddProductToCart(product))
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
