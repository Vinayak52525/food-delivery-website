import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchList } from "../../store/search-slice";
import "./styles/Foods.scss";

function Foods() {
  const category = useSelector((state) => state.category.category);
  const [dishesByCategory, setDishesByCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const mealsCategory = dishesByCategory.map((dish) => {
      return {
        idCategory: dish.idMeal,
        strCategory: dish.strMeal,
      };
    });
    dispatch(setSearchList({ mealsCategory }));
  }, [dishesByCategory, dispatch]);

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setDishesByCategory(data.meals);
    };

    fetchDishes();
  }, [category]);

  return (
    <div className="foods">
      <div className="foods-header">
        <MenuOpenIcon />
        <h1>{category}</h1>
      </div>
      <div className="food-items">
        {dishesByCategory?.map(({ idMeal, strMeal, strMealThumb }) => (
          <FoodItem
            key={idMeal}
            id={idMeal}
            name={strMeal}
            img={strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default Foods;
