import { FunctionComponent } from 'react'
//Component
import Header from '../../Header/Header'
import CategoryDetails from '../../Category-details/Category-details-component'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null
  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}
export default CategoryDetailsPage
