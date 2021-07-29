import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "./styles/CartItem.scss";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../store/cart-slice";

function CartItem({ mealId, name, image, quantity, price }) {
  const dispatch = useDispatch();

  const itemAddHandler = () => {
    dispatch(addCartItem({ mealId, name, image, price }));
  };

  const itemRemoveHandler = () => {
    dispatch(removeCartItem({ mealId }));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={image} alt="CartItem" />
      </div>
      <div className="cart-item__title">
        <h3>{name}</h3>
        <h4>₹{price}</h4>
      </div>
      <div className="cart-item__icons">
        <AddCircleIcon className="icon" onClick={itemAddHandler} />
        <p>{quantity}</p>
        <RemoveCircleIcon className="icon" onClick={itemRemoveHandler} />
      </div>
    </div>
  );
}

export default CartItem;
