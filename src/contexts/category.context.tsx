import { createContext, FunctionComponent, useState } from 'react'
import Category from '../types/category.types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../convertes/firebase.convertes'

interface ICategoryContext {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}
interface ChildrenItem {
  children?: React.ReactNode
}
export const CategoryContext = createContext<ICategoryContext>({
  isLoading: false,
  categories: [],
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvidder: FunctionComponent<ChildrenItem> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ isLoading, categories, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvidder
