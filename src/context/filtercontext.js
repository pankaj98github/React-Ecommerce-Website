import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
}

const FilterProvider = ({children}) => {
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({type: "SET_GRIDVIEW"});
    }

    useEffect(() => {
        dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return <FilterContext.Provider value={{...state, setGridView}}>{children}</FilterContext.Provider>
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider, useFilterContext};