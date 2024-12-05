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

        case "SET_List_VIEW":
            return {
                ...state,
                Grid_view: false,
            }

        case "GET_SORT-VALUE":
            let userSortValue = document.getElementById("sort")
            let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            console.log(sortValue);
            return {
                ...state,
                sorting_value : sortValue,

            }


        default:
            return state;
    }

}

export default FilterReducer;