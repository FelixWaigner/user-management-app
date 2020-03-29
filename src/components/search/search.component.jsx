import React from "react";

import "./search.style.css";

export const Search = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="text" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)