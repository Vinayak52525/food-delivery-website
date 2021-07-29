import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryId, openFoods, closeFoods } from "../../store/items-slice";
import "./styles/SideBarContent.scss";

function SideBarContent({ Icon, text }) {
  const { isClicked } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const toggleActiveHandler = (event) => {
    const text = event.target.innerText;
    if (text !== "Dashboard" && text !== "Foods & Drinks") return;

    if (text === "Dashboard") {
      dispatch(closeFoods());
      dispatch(getCategoryId({ type: null, isClicked: false }));
    }
    if (text === "Foods & Drinks") {
      dispatch(openFoods());
      dispatch(getCategoryId({ type: "Chicken", isClicked: true }));
    }
  };

  let activeClass;
  if (
    (isClicked && text === "Foods & Drinks") ||
    (!isClicked && text === "Dashboard")
  ) {
    activeClass = "active";
  }

  return (
    <div
      className={`sidebar__contents--content ` + activeClass}
      onClick={toggleActiveHandler}
    >
      <Icon className="icon" />
      <p>{text}</p>
    </div>
  );
}

export default SideBarContent;
