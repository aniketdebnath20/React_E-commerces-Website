import { useEffect } from 'react';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from './Context/ProductContext';
import FormatPrice from './PriceFomater/FormatPrice'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import MyImage from './MyImage';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, SingleProduct } = useProductContext();

  const { id: elias, name, company, price, description, stock, stars, reviews, image } = SingleProduct;
  const { id } = useParams();

  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`);
  }, []);


  return (
    <>

      <div className='SingleProduct-heading'>
        <Link to="/" className='home-icon'>Home  / </Link>
        {name};
      </div>


      <div className='singleProduct-container'>

<div className='Product-image'>

         <MyImage imgs={image}/>
</div>
        


        {/* right-container */}
        <div className='product-details-section'>
          <div className='singleProduct-name'> {name} </div>

          <div className='singleProduct-customer-view'>
            <div className='singleProduct-stars'>     {stars}  </div>
            <div className='singleProduct-review'>   (Customer reviews {reviews} )  </div>
          </div>

          <del className='singleProduct-Actual-price'> MRP; <FormatPrice price={price + 250000} />  </del>
          <div className='singleProduct-price'>Deal of the day:<FormatPrice price={price} /> </div>

          <div className='singleProduct-description'>   {description}  </div>

          <div className="singleProduct-feature">

            <div className='feature-Delivery'>
              <div className='icon'>
                <TbTruckDelivery />
              </div>
              <p>Free Delviery</p>
            </div>

            <div className='feature-Delivery'>
              <div className='icon'>
                <TbReplace />
              </div>
              <p>30 Days replacement</p>
            </div>

            <div className='feature-Delivery'>
              <div className='icon'>
                <AiTwotoneSafetyCertificate />
              </div>
              <p>2 Year Warranty</p>
            </div>

            <div className='feature-Delivery'>
              <div className='icon'>
                <FaPhone />
              </div>
              <p>24 Helpline Services</p>
            </div>
          </div>

          <div className='singleProduct-stock'>  Available in:<p>{stock}</p>  </div>
          <div className='singleProduct-company'>  Brand:<p>{company}</p>  </div>

          <hr className='line' />

          <div className='SingleProduct-color'>
            Color: <div className='color-green'> <div className='tick'>?</div> </div>
            <div className='color-yellow'> <div className='tick'>?</div> </div>
            <div className='color-gray'> <div className='tick'>?</div>  </div>
          </div>

          <div className='SingleProduct-add-to-card-section'>
            <div className='Increment-button'>+</div>
            <p>0</p>
            <div className='decrement-button'>-</div>
          </div>

          <div className='add-to-card-button'>
            Add To Cart
          </div>


        </div>

      </div>


      <div>

      </div>



    </>
  )
}

export default SingleProduct
