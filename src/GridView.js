import React from 'react'
import Product from './Product'

function GridView({ products }) {
    console.log(products)
    return (
        <>

                {
                    products.map((curElm) => {
                        return <Product key={curElm.id}  {...curElm} />
                    })
                }




        </>
    )
}

export default GridView
