import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from './PriceFomater/FormatPrice';

const Product = (curELm) => {

  const { id, name, image, price, category } = curELm;
  return (
    <>
      <Link to={`/SingleProduct/${id}`} id='single-product-link' >

        <div className='Main-container'>
          <div className='hover'></div>
          <div>
            <img src={image} alt={name} width={"200px"} />
            <div className='caption'>{category}</div>
          </div>

          <div className='card-data'>
            <p>{name}</p>
            <p>{<FormatPrice price={price} />}</p>
          </div>

        </div>

      </Link>
    </>
  )

}

export default Product
