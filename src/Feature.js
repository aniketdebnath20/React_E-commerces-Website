import { useProductContext } from './Context/ProductContext'
import Loader from './Loader/Loader';
import Product from './Product';

const Feature = () => {

  const { isloading, featureProducts } = useProductContext();
  console.log(" ~ file: Feature.js ~ line 6 ~ Feature ~  featureProducts", featureProducts);

  if (isloading) {
    return <div>
      <h1> .....Loading  </h1>
      <Loader />
    </div>;
  }

  return (
    <>
      <h1> Check out Product</h1>
      {featureProducts.map((curELm) => {
        return <Product key={curELm.id} {...curELm} />
      })}
    </>
  )
}

export default Feature
