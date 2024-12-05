import React from 'react'
import { useFilterContext } from './Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
function ProductList() {

    const { Filter_Products, Grid_view } = useFilterContext();

    console.log(Filter_Products, "prodcutlist")

    if (Grid_view === true) {
        return <GridView products={Filter_Products} />
    }

    if(Grid_view === false){
        return <ListView products = {Filter_Products} />

    }

}

export default ProductList
