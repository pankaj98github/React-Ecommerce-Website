import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filtercontext";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curEle, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curEle}
                onClick={updateFilterValue}
              >{curEle}</button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  button {
    display: flex;
    margin: 1rem;
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

export default FilterSection;
