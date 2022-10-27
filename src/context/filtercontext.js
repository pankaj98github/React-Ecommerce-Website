import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
    }
}

const FilterProvider = ({children}) => {
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"});
    }

    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"});
    }

    const sorting = (e) => {
        let userSortValue = e.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userSortValue});
    }

    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return dispatch({type: "UPDATE_FILTERS_VALUE", payload:{name, value}});
    };

    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue}}>{children}</FilterContext.Provider>
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider, useFilterContext};