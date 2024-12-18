import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducter'
// import { type } from "@testing-library/user-event/dist/type";
// import { type } from "@testing-library/user-event/dist/type";

const FilterContext = createContext();

const initialState = {
    Filter_Products: [],
    All_Products: [],
    Grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
    },
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

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT-VALUE", payload: userValue });
    };

    // filter product by serach

    const updateFilterProduct = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_PRODUCT", payload: { name, value } })

    }



    useEffect(() => {
        dispatch({ type: "FILTER_SORT" })
        dispatch({ type: "SORTING_PRODUCT" });
    }, [products, state.sorting_value, state.filters])


    useEffect(() => {
        dispatch({ type: "SET_LOADING-PRODUCT", payload: products })
    }, [products])


    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterProduct }}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterContext = () => {
    return useContext(FilterContext);
}


