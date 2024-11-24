import { Interface } from 'readline'
import Product from './product.types'

interface Category {
  id: number
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}

export default Category
