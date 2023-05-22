import React from "react";

function Categories({ filterItems, allCategories }) {
  return (
    <div className="btn-container ">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
