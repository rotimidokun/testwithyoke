import React from "react";
import "./Header.css";
import { ReactComponent as UsaIcon } from "../../assets/usa-icon.svg";
import { ReactComponent as StrokeIcon } from "../../assets/stroke.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile-icon.svg";

import Search from "../Search/Search";

const Header = () => {
  return (
    <div className="header-wrapper">
      <a href="/">
        <span>
          <img
            alt="BoroBazar"
            src="https://borobazar.vercel.app/assets/images/logo.svg"
          />
        </span>
      </a>

        <Search />

      <div className="header-right-container">
        <div className="language-selector-container">
          <button>
            <span className="country-logo-container">
              <UsaIcon />
            </span>
            <span> English - EN</span>
            <span>
              <StrokeIcon className="stroke-icon" />
            </span>
          </button>
        </div>

        <div>
          <button className="cart-nav-container">
            <div>
              <CartIcon className="cart-icon" />
              <span className="cart-number-container">0</span>
            </div>
            <span className="cart-text-container">Cart</span>
          </button>
        </div>

        <div className="nav-profile-container">
          <ProfileIcon className="profile-icon" />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
