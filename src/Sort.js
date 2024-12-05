import React from 'react'
import { useFilterContext } from './Context/FilterContext'

function Sort() {

  const { Grid_View, setGridView, setListView, Filter_Products , sorting} = useFilterContext();

  return (
    <>

      <div className='sort'>
        <button className={Grid_View ? "actvie grid" : "grid"} onClick={setGridView}>girdView</button>
        <button className={!Grid_View ? "actvie grid" : "grid"} onClick={setListView}>listView</button>
      </div>

      <div><p>
        {`${Filter_Products.length} Product Available`}
      </p></div>



      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowers"> price (lowers)</option>
            <option value="highest"> price (highest)</option>
            <option value="a-z"> price (a-z)</option>
            <option value="z-a"> price (z-a)</option>
          </select>
        </form>
      </div>

    </>
  )
}

export default Sort
