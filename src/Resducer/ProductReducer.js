import React from 'react'

const ProductReducer = (state, action) => {


    switch (action.type) {
        case "seet_loading":
            return {
                ...state,
                isloading: true,
            };

        case "ai_arror":
            return {
                ...state,
                isloading: false,
                iserror: true,
            };

        case "my_api_data":
            const featureData = action.payload.filter((curElm) => {
                return curElm.featured === true;
            })
            return {
                ...state,
                isloading: false,
                products: action.payload,
                featureproducts: featureData,
            }

        default:
            return state;

    }

    return (
        <>



        </>
    )
}

export default ProductReducer
