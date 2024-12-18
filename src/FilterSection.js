import React from 'react'
import { useFilterContext } from './Context/FilterContext'

function FilterSection() {

  const { filters: { text, category, company }, All_Products, updateFilterProduct } = useFilterContext();

  const getUniqueData = (data, property) => {

    let newVal = data.map((curElem) => {
      return curElem[property];
    })

    return (newVal = ["All", ...new Set(newVal)]);
  }

  const CategoryOnlyData = getUniqueData(All_Products, "category");
  const companyOnlyData = getUniqueData(All_Products, "company");


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
            {CategoryOnlyData.map((curElm, index) => {
              return <button key={index} type='button' name='category' value={curElm} onClick={updateFilterProduct}>  {curElm}   </button>;
            })}
          </div>

        </div>

        <form action='#'>
          <select name="company" id="company" className='company' onClick={updateFilterProduct}>
            {companyOnlyData.map((curElm, index) => {
              return <option key={index} name='company' value={curElm}>  {curElm}   </option>;
            })}
          </select>


        </form>

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
