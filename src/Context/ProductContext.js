import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../Reducer/ProductReducer'; // Fix the typo in the path if necessary

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,  // Use camelCase for consistency
    isError: false,    // Use camelCase for consistency
    products: [],
    featureProducts: [],  // Use camelCase for consistency
    isSingleLoading: false,
    SingleProduct: {},
};

const AppProvider = ({ children }) => {  // Fix: children prop should be lowercase
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" }); // Fixed type
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {  // Fixed typo in 'errro'
            dispatch({ type: "API_ERROR" });  // Fixed typo in action type
        }
    };


    // sigle api call function

    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINFLE_LOADING" }); // Fixed typo
        try {
            const res = await axios.get(url);
            const SingleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
        }

        catch (error) {
            dispatch({ type: "API_SINGLE_ERROR" });  // Fixed typo in action type

        }
    }



    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
