import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../Resducer/ProductReducer';


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isloading: false,
    iserror: false,
    products: [],
    featureproducts: []
}

const AppProvider = ({ Children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "seet_loading" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "my_api_data", payload: products });
        } catch (errro) {
            dispatch({ type: "ai_arror" });
        }

    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppProvider.Provider value={{ ...state }}>
            {Children}
        </AppProvider.Provider>

    );
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext }

