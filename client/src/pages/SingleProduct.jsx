import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  const { productId } = useParams()

  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
