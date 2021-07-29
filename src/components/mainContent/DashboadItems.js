import React from "react";
import { useDispatch } from "react-redux";
import { getCategoryId } from "../../store/items-slice";
import { openFoods } from "../../store/items-slice";
import "./styles/DashboardItems.scss";

function DashboadItems({ id, type, img }) {
  const dispatch = useDispatch();

  const itemHandler = () => {
    dispatch(openFoods());
    dispatch(getCategoryId({ type }));
  };

  return (
    <div className="dashboard-item" onClick={itemHandler}>
      <img src={img} alt={type} />
      <h1>{type}</h1>
    </div>
  );
}

export default DashboadItems;
