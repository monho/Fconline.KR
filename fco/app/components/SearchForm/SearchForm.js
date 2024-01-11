import React from "react";
import "./main.css";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
 
  return (
    <div className="FormContainer">
      <input
        className="SearchForm_Input"
        type="text"
        placeholder="구단주명 입력"
      />
      <button
      className="Search_Btn"
      type="submit">
        <FaSearch />
      </button>
      
    </div>
  );
}

export default SearchForm;
1