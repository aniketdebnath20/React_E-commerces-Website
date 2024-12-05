import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducter'

const FilterContext = createContext();

const initialState = {
    Filter_Products: [],
    All_Products: [],
    Grid_view: true,
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
    console.log(products,"filtercontext")
    const [state, dispatch] = useReducer(reducer, initialState);

    // grid view

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })

    }


    useEffect(() => {
        dispatch({ type: "SET_LOADING-PRODUCT", payload: products })
    }, [products])


    return (
        <FilterContext.Provider value={{ ...state, setGridView }}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterContext = () => {
    return useContext(FilterContext);
}