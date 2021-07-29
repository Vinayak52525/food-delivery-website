import React, { useState } from "react";
import Modal from "../modal/Modal";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart-slice";
import "./styles/DishDetails.scss";
import Loader from "react-loader-spinner";

function DishDetails(props) {
  const { mealId, name, ingredient1, ingredient2, ingredient3, image, price } =
    props.detail;

  const [itemAdded, setItemAdded] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  const itemAddHandler = () => {
    setIsAdding(true);
    setTimeout(() => {
      const count = itemAdded + 1;
      setItemAdded(count);
      dispatch(
        addCartItem({
          mealId,
          name,
          image,
          price,
        })
      );
      setIsAdding(false);
    }, 500);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="dish-details">
        <div className="heading">
          <img src={image} alt="Dish" />
          <h3>{name}</h3>
          <h2>₹{price}</h2>
          {itemAdded > 0 && <p>{itemAdded} Items added</p>}
        </div>
        <div className="ingredients">
          <h1>Ingredients</h1>
          <h3>{ingredient1}</h3>
          <h3>{ingredient2}</h3>
          <h3>{ingredient3}</h3>
        </div>

        <div className="btn">
          {!isAdding && (
            <>
              <button onClick={itemAddHandler}>Add to Order</button>
              <button onClick={props.onClose}>Cancel</button>
            </>
          )}
        </div>
        {isAdding && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={30}
            width={30}
            timeout={3000} //3 secs
          />
        )}
      </div>
    </Modal>
  );
}

export default DishDetails;
