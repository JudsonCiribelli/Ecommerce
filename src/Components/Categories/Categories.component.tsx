import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
//Component
import CategoryItem from '../category-item/category-item.component'
//Styles
import './Categories.styles.css'
//Utilities
import Category from '../../types/category.types'
import { db } from '../../config/firebase.config'
import { CategoriesContainer, CategoriesContent } from './Categories.styles'
import { categoryConverter } from '../../convertes/firebase.convertes'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
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
