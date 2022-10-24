import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
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

    useEffect(() => {
        dispatch({type:"SORTING_PRODUCTS"})
    }, [products, state.sorting_value]);

    useEffect(() => {
        dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>{children}</FilterContext.Provider>
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider, useFilterContext};