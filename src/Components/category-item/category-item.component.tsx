import { FunctionComponent } from 'react'
//Utilities
import Category from '../../types/category.types'
//styles
import '../category-item/category-item.styles.css'
import { CategoryItemContainer, CategoryName } from './categgory-item-styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
