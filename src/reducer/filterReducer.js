const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":

    let priceArr = action.payload.map((curEle) => curEle.price);

    // ways to find max value in the array
    // 1 way
    // let maxPrice = Math.max.apply(Math, priceArr);
    // console.log(maxPrice)

    // 2 way
    // let maxPrice = priceArr.reduce((initialValue, curVal) => Math.max(initialValue, curVal), 0);
    // console.log(maxPrice);

    // 3 way
    let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {...state.filters, maxPrice, price:maxPrice}
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.company === company;
        });
      }
      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curColor) => {
          return curColor.colors.includes(colors);
        });
      }
      if (price === 0){
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.price === price
        })
      }else{
        tempFilterProduct = tempFilterProduct.filter((curEle) => {
          return curEle.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: state.filters.maxPrice,
          minPrice: 0,
          price: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
