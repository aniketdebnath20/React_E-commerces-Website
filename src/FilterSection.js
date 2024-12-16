import React from 'react'
import { useFilterContext } from './Context/FilterContext'

function FilterSection() {

  const { filters: { text }, updateFilterProduct } = useFilterContext();


  return (


    <>

      <div className='Filter_Section_Main_Contaienr'>

        <div className='Filter_Search_button'>
          <form onSubmit={(e) => e.preventDefault()}>

            <input type="text" name="text" id="text" placeholder='Search Product' value={text} onChange={updateFilterProduct} />
          </form>
        </div>

        <div className='Filter_category_Section'>
          <p>Category</p>

          <div className='Filter_Sorting_Product'>
            <p>All</p>
            <p>Laptop</p>
            <p>Computer</p>
            <p>Accessories</p>
            <p>Watch</p>
          </div>

        </div>

        <div className='Price_Range_Select'>
          <p>Price</p>
          <input type="range" className='range' />
        </div>

        <button className='Clear_Filter_Product'>Clear Product</button>


      </div>

    </>
  )
}

export default FilterSection
