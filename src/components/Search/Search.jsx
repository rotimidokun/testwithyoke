import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-input-container">
      <input
        id="top-bar-search"
        placeholder="What are you looking..."
        aria-label="top-bar-search"
        autocomplete="off"
        value=""
        name="search"
        className="search-input"
      />
      <span className="search-icon-container">
        <SearchIcon className="search-icon" />
      </span>
    </div>
  );
};

export default Search;
