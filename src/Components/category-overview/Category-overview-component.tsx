import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
//Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './Category-overview-styles'
import ProductItem from '../Product-item/Product-item-component'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
