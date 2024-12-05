const FilterReducer = (state, action) => {

    switch (action.type) {

        case "SET_LOADING-PRODUCT":
            return {
                ...state,
                Filter_Products: [...action.payload],
                All_Products: [...action.payload],
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                Grid_view: true,
            }


        default:
            return state;
    }

}

export default FilterReducer;