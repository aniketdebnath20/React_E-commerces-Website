import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducter'
import { type } from "@testing-library/user-event/dist/type";

const FilterContext = createContext();

const initialState = {
    Filter_Products: [],
    All_Products: [],
    Grid_view: true,
    sorting_value: "lowest",
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
    console.log(products, "filtercontext")
    const [state, dispatch] = useReducer(reducer, initialState);

    // grid view

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = () => {
        return dispatch({ type: "SET_List_VIEW" })
    }

    //sortin gdunc tion

    const sorting = () => {
        return dispatch({ type: "GET_SORT-VALUE" });


    }


    useEffect(() => {
        

    },[state.sorting_value])


    useEffect(() => {
        dispatch({ type: "SET_LOADING-PRODUCT", payload: products })
    }, [products])


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterContext = () => {
    return useContext(FilterContext);
}