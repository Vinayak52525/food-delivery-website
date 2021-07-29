import React from "react";
import { Avatar } from "@material-ui/core";
import profile from "../sidebar/profile.jpg";
import "./styles/SideBarFooter.scss";

function SideBarFooter() {
  return (
    <div className="sidebar__footer">
      <div className="profile-card">
        <div className="sidebar__footer--profile">
          <Avatar src={profile} className="profile-icon" />
          <h1>Vinayak Jadhav</h1>
          <h3>Waiter - 4h 56m</h3>
        </div>
        <div>
          <h1>Open Profile</h1>
        </div>
      </div>
      <div>
        <h1 className="credits">
          Made by Vinayak Jadhav <span>❤</span>
        </h1>
      </div>
    </div>
  );
}

export default SideBarFooter;
