import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
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

    useEffect(() => {
        dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return <FilterContext.Provider value={{...state, setGridView, setListView}}>{children}</FilterContext.Provider>
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider, useFilterContext};