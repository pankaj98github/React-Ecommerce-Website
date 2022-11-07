import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmount from "./CartAmount";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {useCartContext} from "../context/cartcontext";

const AddToCart = ({ products }) => {
  const {addToCart} = useCartContext();
  const { id, colors, stock } = products;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors : &nbsp;
          {colors.map((curColor) => {
            return (
              <button
                key={id}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartAmount
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <NavLink
        to="/cart"
        onClick={() => addToCart(id, color, amount, products)}
      >
        <Button>Add to Cart</Button>
      </NavLink>
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
      font-size: 1.6rem;
      margin: 0 1rem;
      color: black
    }
  }
`;

export default AddToCart;
