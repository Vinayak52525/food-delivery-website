import React from "react";
import "./styles/FoodItem.scss";
import { getDishId } from "../../store/dish-slice";
import { useDispatch } from "react-redux";

function FoodItem({ id, name, img }) {
  const price = Math.floor(Math.random() * (500 - 200 + 1) + 200);
  const dispatch = useDispatch();
  const foodItemClickHandler = () => {
    dispatch(getDishId({ dishId: id, price }));
  };

  return (
    <div className="fooditem" onClick={foodItemClickHandler}>
      <div>
        <img src={img} alt="Delicious food item" />
      </div>
      <h4>{name}</h4>
      <h2>₹{price}</h2>
    </div>
  );
}

export default FoodItem;
