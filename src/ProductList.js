import React from 'react'
import { useFilterContext } from './Context/FilterContext';
import GridView from './GridView';
function ProductList() {

    const { Filter_Products, setGridView } = useFilterContext();

    console.log(Filter_Products, "prodcutlist")

    if (setGridView) {
        return <GridView products={Filter_Products} />
    }

    // if(setGridView === false){
    //     return <ListView products = {filter_Products} />

    // }

}

export default ProductList
