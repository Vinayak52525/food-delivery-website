import React from "react";
import Modal from "../modal/Modal";
import CartItem from "./CartItem";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./styles/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartView } from "../../store/cart-slice";

function Cart() {
  const dispatch = useDispatch();
  const { cartList, subTotal } = useSelector((state) => state.cart);
  const cartLength = cartList.length;

  const cartCloseHandler = () => {
    dispatch(toggleCartView());
  };

  let cartItemsView;

  cartItemsView =
    cartLength > 0 ? (
      <div className="cartitems">
        {cartList.map(({ mealId, name, image, quantity, price }) => (
          <CartItem
            key={mealId}
            mealId={mealId}
            name={name}
            image={image}
            quantity={quantity}
            price={price}
          />
        ))}
      </div>
    ) : (
      <p className="noItems">Cart is empty. Please add items to cart.😊</p>
    );

  return (
    <Modal onClose={cartCloseHandler}>
      <div className="cart">
        <h1>My Cart</h1>
        {cartItemsView}

        <div className="subtotal">
          <h4>SubTotal ({cartList.length} items) : </h4>
          <h2>₹{subTotal}</h2>
        </div>
        <div className="order-tab">
          <button
            className="order-btn"
            disabled={cartLength === 0 ? true : false}
          >
            Place Order <ChevronRightIcon className="arrow" />
          </button>
          <button className="order-btn" onClick={cartCloseHandler}>
            Cancel
            <ChevronRightIcon className="arrow" />
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
