import React from "react";
import FormatPrice from "../helper/FormatPrice";
import CartAmount from "./CartAmount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

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
        setIncrease={() => setIncrease(id)}
        setDecrease={() => setDecrease(id)}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
