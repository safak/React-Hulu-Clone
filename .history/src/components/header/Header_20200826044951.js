import React from "react";
import "./Header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerIcons">
        <div className="headerIcon">
          <Home />
        </div>
        <div className="headerIcon">
          <FlashOn />
        </div>
        <div className="headerIcon">
          <LiveTv />
        </div>
        <div className="headerIcon">
          <VideoLibrary />
        </div>
        <div className="headerIcon">
          <Search />
        </div>
        <div className="headerIcon">
          <PersonOutline />
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"
        alt=""
      />
    </div>
  );
};

export default Header;
