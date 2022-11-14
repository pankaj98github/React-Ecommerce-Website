const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, products } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === id + color) {
          let newAmount = curEle.amount + amount;
          if (newAmount >= curEle.max) {
            newAmount = curEle.max;
          }
          return {
            ...curEle,
            amount: newAmount,
          };
        } else {
          return curEle;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: products.name,
        color,
        amount,
        image: products.image[0].url,
        price: products.price,
        max: products.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedData = state.cart.filter((curEle) => {
      return curEle.id !== action.payload;
    });
    return {
      ...state,
      cart: updatedData,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let incAmount = curEle.amount + 1;
        if (incAmount >= curEle.max) {
          incAmount = curEle.max;
        }
        return {
          ...curEle,
          amount: incAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let decAmount = curEle.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curEle,
          amount: decAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedCartVal = state.cart.reduce((initialVal, curEle) => {
      let { amount } = curEle;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedCartVal,
    };
  }

  return state;
};

export default cartReducer;
