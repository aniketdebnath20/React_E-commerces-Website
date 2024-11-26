import React from 'react'
import Footer from './Compnet/_Footer'
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { GiCheckedShield } from "react-icons/gi";
import Feature from './Feature';
import Product from './Product';
const Home = () => {
  return (
    <>
        {/* Main section */}
        <div className='Main-Section'>
        <div className='First-container'>
          <h2>Welcome the <p> Aniket Store </p> </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aperiam expedita officia incidunt eius cum fugiat sunt culpa dolorum, quia, amet odio itaque delectus vel laborum debitis cupiditate? Mollitia, repellat!</p>
          <div className='Arival-button'>
            <p> Explore New Arivial </p>
            <button>Click</button>
          </div>
        </div>
        <div className='Second-container'>
          <img src='../public/Image/istockphoto-1388117846-612x612.jpg' alt="image" />
        </div>
      </div>
      {/* Main section */}


      {/* Feature section */}
      <div className='Feature-section'>

        <div className='Delivery-Section'>
          <div id='icon'>
            <TbTruckDelivery id='logo' />
          </div>
          <p>Super Fast and Free Delivery</p>
        </div>

        <div className='Second-content'>
          <div className='Money-section'>
            <div id='icon'>
              <GiReceiveMoney id='logo' />
            </div>
            <p>Non-Contact Shipping</p>
          </div>
          <div className='Shield-section'>
            <div id='icon'>
              <GiCheckedShield id='logo' />
            </div>
            <p>Money back Guraanted</p>
          </div>
        </div>

        <div className='Safety-section'>
          <div id='icon'>
            <AiFillSafetyCertificate id='logo' />
          </div>
          <p>Super Secure Payment System</p>
        </div>

      </div>
      {/* Feature section */}


      {/* company section */}
      <div className='Company-Section'>

        <p>Trusted By 1000+ Company</p>
        <div className='Company-logo'>
          <img src="../public/Image/OIP (1).jpg" alt="" />
          <img src="../public/Image/OIP (2).jpg" alt="" />
          <img src="../public/Image/OIP.jpg" alt="" />
          <img src="../public/Image/download.jpg" alt="" />
          <img src="../public/Image/download (2).jpg" alt="" />
        </div>

      </div>
      {/* company section */}



  <Feature/> 
  <Product/>
 
    
 
 

      {/* Footer section */}
      <Footer />
      {/* Footer section */}



    </>
  )
}

export default Home
