import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartAmount = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FiMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmount;
