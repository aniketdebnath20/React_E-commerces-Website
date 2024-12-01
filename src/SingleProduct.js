// export default SingleProduct
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from './Context/ProductContext'
import FormatPrice from './PriceFomater/FormatPrice'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { AiTwotoneSafetyCertificate } from 'react-icons/ai'
import { FaPhone } from 'react-icons/fa'
import MyImage from './MyImage'
import Star from './Star'

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, SingleProduct } = useProductContext();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);  // Initialize loading state

  useEffect(() => {
    // Start loading
    setLoading(true);
    
    // Fetch product data
    getSingleProduct(`${API}?id=${id}`).then(() => {
      // Set loading to false once data is fetched
      setLoading(false);
    });
  }, [id]);  // Added 'id' to the dependency array


  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div> 
      </div>
    );
  }

  const { name, company, price, description, stock, stars, reviews, image } = SingleProduct;

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className='SingleProduct-heading'>
        <Link to="/" className='home-icon'>Home / </Link>
        {name};
      </div>

      <div className='singleProduct-container'>
        <div>
          <MyImage imgs={image} />
        </div>

        {/* right-container */}
        <div className='product-details-section'>
          <div className='singleProduct-name'>{name}</div>

          <div className='singleProduct-customer-view'>
            <div className='singleProduct-stars'> <Star stars={stars} /></div>
            <div className='singleProduct-review'>(Customer reviews {reviews})</div>
          </div>

          <del className='singleProduct-Actual-price'>MRP: <FormatPrice price={price + 250000} /></del>
          <div className='singleProduct-price'>Deal of the day: <FormatPrice price={price} /></div>

          <div className='singleProduct-description'>{description}</div>

          <div className="singleProduct-feature">
            <div className='feature-Delivery'>
              <div className='icon'><TbTruckDelivery /></div>
              <p>Free Delivery</p>
            </div>
            <div className='feature-Delivery'>
              <div className='icon'><TbReplace /></div>
              <p>30 Days replacement</p>
            </div>
            <div className='feature-Delivery'>
              <div className='icon'><AiTwotoneSafetyCertificate /></div>
              <p>2 Year Warranty</p>
            </div>
            <div className='feature-Delivery'>
              <div className='icon'><FaPhone /></div>
              <p>24 Helpline Services</p>
            </div>
          </div>

          <div className='singleProduct-stock'>Available in: <p>{stock}</p></div>
          <div className='singleProduct-company'>Brand: <p>{company}</p></div>

          <hr className='line' />

          <div className='SingleProduct-color'>
            Color:
            <div className='color-green' title="Green" role="button" aria-label="Select Green color">
              <div className='tick'>✓</div>
            </div>
            <div className='color-yellow' title="Yellow" role="button" aria-label="Select Yellow color">
              <div className='tick'>✓</div>
            </div>
            <div className='color-gray' title="Gray" role="button" aria-label="Select Gray color">
              <div className='tick'>✓</div>
            </div>
          </div>

          <div className='SingleProduct-add-to-card-section'>
            <div className='Increment-button' onClick={handleIncrement}>+</div>
            <p>{quantity}</p>
            <div className='decrement-button' onClick={handleDecrement}>-</div>
          </div>

          <div className='add-to-card-button'>
            Add To Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
