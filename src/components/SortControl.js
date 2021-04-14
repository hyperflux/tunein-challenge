import React from "react";

export const SortControl = ({ sortOptions, sortBy, setSortBy }) => {
  const handleOptionClick = (option) => {
    setSortBy(option);
  };

  return (
    <div className="App-sort">
      <p>Sort Stations:</p>
      <ul>
        {sortOptions.map((option) => (
          <li
            key={option}
            onClick={() => {
              handleOptionClick(option);
            }}
            className={sortBy === option ? "App-sort-selected" : ""}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
