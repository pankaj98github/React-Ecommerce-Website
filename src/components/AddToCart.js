import React, { useState } from "react";
import styled from "styled-components";
import {FaCheck} from "react-icons/fa";

const AddToCart = ({ products }) => {
  const { id, colors, stock } = products;

  const [color, setColor] = useState(colors[0]);

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors: &nbsp;
          {colors.map((curColor) => {
            return (
              <button
                key={id}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle"/> : null}
              </button>
            );
          })}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btnStyle {
    height: 2rem;
    width: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 2;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
