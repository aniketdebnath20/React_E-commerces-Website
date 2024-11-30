import React from 'react'

const _Footer = () => {
  return (
    <>
      <div className='Footer'>

        <div className='Footer-content'>
          <p>Aniket Store</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='Footer-Feature'>
          <p>High Quitity Product</p>
          <p>24 Help-Line Support</p>
          <p>1 to 2 Days Delivery</p>
          <p>Different Payment System</p>
        </div>

        <div className='Footer-Follow'>
          <p>Follow us on </p>
          <div className='Footer-Follow-icon'>
            <div className='Follow-icon'></div>
            <div className='Follow-icon'></div>
            <div className='Follow-icon'></div>
          </div>
        </div>

        <div className='Footer-Contact'>
          <p>Login for update on New Airval Product</p>
          <div className='Email'>
            <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
          </div>
        </div>



      </div>
      <hr className='hr' />
      <div className='Footer-Last-Section'>
        <p>Desgin and Develop by <p className='P'>ANIKET</p></p>
      </div>
    </>
  )
}

export default _Footer
