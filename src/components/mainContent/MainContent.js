import Dashboard from "./Dashboard";
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import "./styles/MainContent.scss";
import { useSelector } from "react-redux";
import Foods from "./Foods";
import DishDetails from "./DishDetails";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/dish-slice";

function MainContent() {
  const [dishDetail, setDishDetail] = useState({});
  const { isClicked, foodsOpen } = useSelector((state) => state.category);
  const { modalOpen, dishId, price } = useSelector((state) => state.dish);
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    setDishDetail({});
    dispatch(closeModal());
  };

  useEffect(() => {
    const getDishDetails = async () => {
      try {
        if (!dishId) return;
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishId}`
        );
        const dishData = await response.json();
        const mealDetails = dishData.meals[0];
        setDishDetail({
          mealId: mealDetails.idMeal,
          name: mealDetails.strMeal,
          ingredient1: mealDetails.strIngredient1,
          ingredient2: mealDetails.strIngredient2,
          ingredient3: mealDetails.strIngredient3,
          image: mealDetails.strMealThumb,
          price,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getDishDetails();
  }, [dishId, price]);

  return (
    <div className="main-content">
      <Searchbar />
      {!isClicked && <Dashboard />}
      {foodsOpen && <Foods />}
      {modalOpen && (
        <DishDetails onClose={modalCloseHandler} detail={dishDetail} />
      )}
    </div>
  );
}

export default MainContent;
