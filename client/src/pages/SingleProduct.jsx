import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  console.log(useParams())
  const { productId } = useParams() // (2)

  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
