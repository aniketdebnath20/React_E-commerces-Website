import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from './PriceFomater/FormatPrice';

const Product = (curELm) => {

  const { id, name, image, price, category } = curELm;
  return (
    <>
    <Link to={`/SingleProduct/${id}`}>

      <div className='container'>
        <figure>
          <img src={image} alt={name} width={"200px"} />
          <figcaption className='caption'>{category}</figcaption>
        </figure>

        <div className='card-data'>
          <h2>{name}</h2>
          <p>{<FormatPrice price={price} />}</p>
        </div>

      </div>
      <br></br>
      <br></br>

    </Link>
    </>
  )

}

export default Product
