import React from 'react'
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList'

function ProductPage() {

    return (
        <>

            <div className='Container filter-column'>

                <div>
                    <FilterSection />
                </div>

                <div className='Product-section'>
                    <div className='sort-filter-product'>
                        <Sort />
                    </div>
                    <div className='Product-list'>
                        <ProductList />
                    </div>
                </div>

            </div>


        </>
    )
}

export default ProductPage
