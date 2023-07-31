import React from "react";
import "./header.css";
import logo from "../../../logo.svg";

export default function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="bx bxs-location-plus absolute-center location-icon"></i>
              <input
                type="text"
                placeholder="Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi"
                className="input-searchbar"
              />
            </div>
            <i className="bx bxs-down-arrow absolute-center"></i>
          </div>
          <div className="location-search-separetor"></div>
          <div className="header-searchbar">
            <div className="header-search-icon-box absolute-center">
            <i className="bx bxs-search absolute-center search-icon"></i>
            </div>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img src={logo} alt="Profile" className="header-profile-image" />
          <span className="header-username">Anand Kumar</span>
          <i className="bx bx-chevron-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
}
