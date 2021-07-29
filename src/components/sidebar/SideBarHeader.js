import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileNav } from "../../store/mobileNav-slice";
import "./styles/SideBarHeader.scss";

function SideBarHeader() {
  const isVisible = useSelector((state) => state.mobileNav.isVisible);
  const dispatch = useDispatch();
  const mobileNavHandler = () => {
    dispatch(toggleMobileNav());
  };

  return (
    <div className="top-logo">
      <div className="sidebar_header">
        <div className="logo">
          <FastfoodIcon />
        </div>
        <h1>
          Smart<span>FOODS</span>
        </h1>
      </div>
      <div className="menu-icon" onClick={mobileNavHandler}>
        {isVisible ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
    </div>
  );
}

export default SideBarHeader;
