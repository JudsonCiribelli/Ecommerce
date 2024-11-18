import { useEffect, useState } from 'react'

import { getDocs, collection } from 'firebase/firestore'
//Styles
import './Categories.styles.css'
//Utilities
import Category from '../../types/category.types'

import { db } from '../../config/firebase.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))
      querySnapshot.forEach((doc: any) => {
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
    <div className='categories-container'>
      <div className='categories-content'></div>
    </div>
  )
}

export default Categories
