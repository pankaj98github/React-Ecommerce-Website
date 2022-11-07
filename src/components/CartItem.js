import React from "react";
import FormatPrice from "../helper/FormatPrice";
import CartAmount from "./CartAmount";
import {FaTrash} from "react-icons/fa";

const CartItem = ({ id, name, image, color, price, amount }) => {
     const setIncrease = () => {
    //    amount < stock ? setAmount(amount + 1) : setAmount(stock);
     };

     const setDecrease = () => {
    //    amount > 1 ? setAmount(amount - 1) : setAmount(1);
     };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <CartAmount
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <div className="cart-hide">
        <p>
            <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" />
      </div>
    </div>
  );
};

export default CartItem;
