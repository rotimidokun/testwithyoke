import React from "react";
import SubMenuItem from "../SubMenuItem/SubMenuItem";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-icon.svg";
import { ReactComponent as StrokeIcon } from "../../assets/stroke.svg";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="subheader-container">
        <button className="subheader-categories-menu">
          <Hamburger className="hamburger-menu" />
          All Categories
        </button>

      <div className="subhear-container-center-menu">
        <SubMenuItem text="Demos" showDropDown />
        <SubMenuItem text="Categories" showDropDown />
        <SubMenuItem text="Dietary" showDropDown />
        <SubMenuItem text="Search" />
        <SubMenuItem text="Shops" />
        <SubMenuItem text="Pages" showDropDown />
      </div>

      <div>
        <div></div>
        <button className="subheader-address-selector">
        <LocationIcon />
          <span className="subheader-delivery-text">Delivery:</span>
          <span className="subheader-address-text">
            Address
          </span>
          <span className="subheader-dropdown-icon">
            <StrokeIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
