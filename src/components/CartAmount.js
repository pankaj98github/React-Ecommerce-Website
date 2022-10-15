import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {Button} from '../styles/Button';

const CartAmount = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <p style={{marginRight:"2rem"}}>Quantity :</p>
        <button onClick={() => setDecrease()}>
          <FiMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FiPlus />
        </button>
      </div>
      <br />
      <NavLink to="/cart">
        <Button>Add to Cart</Button>
      </NavLink>
    </div>
  );
};

export default CartAmount;
