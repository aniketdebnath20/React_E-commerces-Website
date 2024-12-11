import React from 'react'
import { Link } from 'react-router-dom';

function ListView({ products }) {
    return (
        <>

            <div className='List_view'>

                {
                    products.map((curElm) => {
                        const { id, name, image, price, description } = curElm;
                        return (
                            <div className='Product_Container_List_view'>
                                <figure>
                                    <img src={image} alt={name} className='image' />
                                </figure>

                                <div className='Product_detail'>
                                    <div className='name'>
                                        Name: <p >{name} </p>
                                    </div>
                                    <div className='price'>
                                        Price: <p> {price} </p>
                                    </div>
                                    <p>  {description} </p>

                                    <Link to={`/SingleProduct/${id}`}>
                                        <button className='btn'>View</button>
                                    </Link>
                                </div>


                            </div>
                        )

                    })
                }


            </div >

        </>
    )
}

export default ListView
