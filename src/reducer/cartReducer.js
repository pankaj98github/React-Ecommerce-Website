const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
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

    case "REMOVE_ITEM":
      let updatedData = state.cart.filter((curEle) => {
        return curEle.id !== action.payload;
      });
      return {
        ...state,
        cart: updatedData,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_INCREMENT":
      const incProduct = state.cart.map((curEle) => {
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
        cart: incProduct,
      };

    case "SET_DECREMENT":
    const decProduct = state.cart.map((curEle) => {
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
        cart: decProduct,
      };

    case "CART_TOTAL_ITEM_PRICE":
      let { total_item, total_price } = state.cart.reduce(
        (accum, curEle) => {
          let { amount, price } = curEle;
          accum.total_item += amount;
          accum.total_price += price * amount;
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };

      return state;
  }
};

export default cartReducer;
