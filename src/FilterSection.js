import React from 'react'
import { useFilterContext } from './Context/FilterContext'
import { TiTick } from 'react-icons/ti';
import FormatPrice from './PriceFomater/FormatPrice'


function FilterSection() {

  const { filters: { text, category, company, color, price, minPrice, maxPrice, filter }, All_Products, clearFilter, updateFilterProduct } = useFilterContext();

  const getUniqueData = (data, property) => {

    let newVal = data.map((curElem) => {
      return curElem[property];
    })

    if (property === "colors") {
      // return  newVal = (newVal = ["ALL", ...new Set([].concat(...newVAl))];
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  }

  const CategoryOnlyData = getUniqueData(All_Products, "category");
  const companyOnlyData = getUniqueData(All_Products, "company");
  const ColorData = getUniqueData(All_Products, "colors");

  // console.log(ColorData);

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
              return <button key={index} type='button' name='category' className='Filter_Category' value={curElm} onClick={updateFilterProduct}>  {curElm}   </button>;
            })}
          </div>

        </div>

        <form action='#'>
          <p className='Company_Filter_Section'>company</p>
          <select name="company" id="company" className='company' onClick={updateFilterProduct}>
            {companyOnlyData.map((curElm, index) => {
              return <option key={index} name='company' value={curElm}>  {curElm}   </option>;
            })}
          </select>


        </form>


        <div className='Color_Filter'>
          {
            ColorData.map((curColor, index) => {
              if (curColor === "All") {
                return <button key={index} value={curColor} name='color' className='All_Filter_Button' onClick={updateFilterProduct} >All </button>
              }
              return <button key={index} value={curColor} name='color' className='Color_Filter_Button' style={{ backgroundColor: curColor }} onClick={updateFilterProduct} > {color === curColor ? <TiTick /> : null} </button>
            })
          }

        </div>

        <div className='Price_Range_Select'>
          <p>Price</p>
          <FormatPrice price={price} />
          <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={updateFilterProduct} />
        </div>

        <button className='Clear_Filter_Product' onClick={clearFilter}  >Clear Product</button>


      </div>

    </>
  )
}

export default FilterSection
