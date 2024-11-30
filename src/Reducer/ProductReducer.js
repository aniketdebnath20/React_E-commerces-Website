const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: true };

        case 'MY_API_DATA':
            const FeatureData = action.payload.filter((curElm) => {
                return curElm.featured === true;
            });
            return { ...state, isLoading: false, products: action.payload, featureProducts: FeatureData };

        case 'API_ERROR':
            return { ...state, isLoading: false, isError: true };

        case 'SET_SINFLE_LOADING':
            return { ...state, isSingleLoading: true };

        case 'SET_SINGLE_PRODUCT':
            return { ...state, isSingleLoading: false, SingleProduct: action.payload };

        case 'API_SINGLE_ERROR':
            return { ...state, isSingleLoading: false, isError: true };

        default:
            return state;
    }
};

export default productReducer;