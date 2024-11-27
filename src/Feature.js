import { useProductContext } from './Context/ProductContext'
import Product from './Product';

const Feature = () => {

  const { isloading, featureProducts } = useProductContext();
  if (isloading) {
    return <div>
      <h1> .....Loading  </h1>
    </div>;
  }

  return (
    <>
      <h1> Check out Product</h1>

      <div className='product-flex'>
      {featureProducts.map((curELm) => {
        return <Product key={curELm.id} {...curELm} />
      })}
      </div>
    </>
  )
}

export default Feature
