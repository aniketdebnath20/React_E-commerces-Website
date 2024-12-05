import React from 'react'
import { Link } from 'react-router-dom';

function ListView({ products }) {
    return (
        <>
            <div>

                {
                    products.map((curElm) => {
                        const { id, name, image, price, description } = curElm;
                        return (
                            <div>
                                <figure>
                                    <img src={image} alt={name} className='image' />
                                </figure>

                                <Link to={`/SingleProduct/${id}`}>
                                    <button>View</button>
                                </Link>
                            </div>
                        )

                    })
                }



            </div>
        </>
    )
}

export default ListView
