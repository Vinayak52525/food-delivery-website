import React, { useEffect, useState } from "react";
import DashboadItems from "./DashboadItems";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { setSearchList } from "../../store/search-slice";
import "./styles/Dashboard.scss";
import { useDispatch } from "react-redux";

function Dashboard() {
  const [mealsCategory, setMealsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchList({ mealsCategory }));
  }, [dispatch, mealsCategory]);

  useEffect(() => {
    const getMealCategories = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const categoryData = await response.json();

      setMealsCategory(categoryData.categories);
      setIsLoading(false);
    };

    getMealCategories();
  }, []);

  if (isLoading) {
    return (
      <Loader
        className="loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    );
  }

  return (
    <div className="dashboard">
      <div>
        {mealsCategory.map(({ idCategory, strCategory, strCategoryThumb }) => {
          return (
            <DashboadItems
              key={idCategory}
              id={idCategory}
              type={strCategory}
              img={strCategoryThumb}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
