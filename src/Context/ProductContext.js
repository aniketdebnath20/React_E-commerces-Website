import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../Reducer/ProductReducer'; // Fix the typo in the path if necessary

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,  // Use camelCase for consistency
    isError: false,    // Use camelCase for consistency
    products: [],
    featureProducts: []  // Use camelCase for consistency
};

const AppProvider = ({ children }) => {  // Fix: children prop should be lowercase
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" }); // Fixed typo
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {  // Fixed typo in 'errro'
            dispatch({ type: "API_ERROR" });  // Fixed typo in action type
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
