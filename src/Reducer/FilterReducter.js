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
            // let userSortValue = document.getElementById("sort")
            // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;

            // console.log(sortValue);

            return {
                ...state,
                sorting_value: action.payload,
            }


        case "SORTING_PRODUCT":

            let newSortData;

            const { Filter_Products } = state;
            let tempSortProduct = [...Filter_Products];

            const sortingProduct = (a, b) => {

                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (state.sorting_value === "lowers") {
                    return a.price - b.price;
                }

                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);

                }
            }


            newSortData = tempSortProduct.sort(sortingProduct);


            return {
                ...state,
                Filter_Products: newSortData,
            }

        case "UPDATE_FILTER_PRODUCT":
            const { name, value } = action.payload;

            return {
                ...state,

                filters: {
                    ...state.filters,
                    [name]: value,
                },
            }

        case "FILTER_SORT":
            let { All_Products } = state;
            let tempFilterProduct = [...All_Products];

            const { text, category, company, color } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }

            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                })
            }


            if (company !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company === company;
                })
            }


            if (color !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.colors.includes(color);
                })
            }


            return {
                ...state,
                Filter_Products: tempFilterProduct,
            }


            case "CLEAR_FILTER":
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        text: "",
                        category: "All",
                        company: "All",
                        color: "All",
                        price: 0,
                    }
                }

        default:
            return state;
    }

}

export default FilterReducer;