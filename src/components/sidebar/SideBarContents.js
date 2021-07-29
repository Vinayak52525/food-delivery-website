import React from "react";
import SideBarContent from "./SideBarContent";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ReceiptIcon from "@material-ui/icons/Receipt";
import SettingsIcon from "@material-ui/icons/Settings";
import "./styles/SideBarContents.scss";

function SideBarContents() {
  return (
    <div className="sidebar__contents">
      <SideBarContent Icon={DashboardIcon} text="Dashboard" />
      <SideBarContent Icon={EmojiFoodBeverageIcon} text="Foods & Drinks" />
      <SideBarContent Icon={QuestionAnswerIcon} text="Messages" />
      <SideBarContent Icon={ReceiptIcon} text="Bills" />
      <SideBarContent Icon={SettingsIcon} text="Settings" />
    </div>
  );
}

export default SideBarContents;
