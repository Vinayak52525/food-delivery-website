import React from "react";
import SideBarHeader from "../sidebar/SideBarHeader";
import SideBarContents from "./SideBarContents";
import SideBarFooter from "./SideBarFooter";
import { useSelector } from "react-redux";
import "./styles/Sidebar.scss";

function SideBar() {
  const isVisible = useSelector((state) => state.mobileNav.isVisible);
  return (
    <div className="sidebar">
      <SideBarHeader />
      {isVisible && (
        <>
          <SideBarContents />
          <hr />
          <SideBarFooter />
        </>
      )}
    </div>
  );
}

export default SideBar;
