import { useContext, useEffect } from 'react'
import Loading from '../loading/loading.component'
//Component
import CategoryItem from '../category-item/category-item.component'
//Styles
import './Categories.styles.css'
//Utilities
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
import { CategoryContext } from '../../contexts/category.context'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
