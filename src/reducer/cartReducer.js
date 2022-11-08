const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {id, color, amount, products} = action.payload;

        let cartProduct;
        cartProduct = {
            id: id + color,
            name: products.name,
            color,
            amount,
            image: products.image[0].url,
            price: products.price,
            max: products.stock,
        }

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }

    if(action.type === "REMOVE_ITEM"){
        let updatedData = state.cart.filter((curEle) => {
            return curEle.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedData
        }
    }

    return state;
}

export default cartReducer;