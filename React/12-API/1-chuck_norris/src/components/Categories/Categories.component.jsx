import React from "react";

const Categories = (props) => {
  const options = props.categories.map((category, i) =>
    i === 0 ? (
      <option key={i} value="" selected disabled>
        Pick a category
      </option>
    ) : (
      <option key={i} value={category}>
        {category}
      </option>
    )
  );
  return (
    <select
      name="categories"
      id="categories"
      onChange={props.handleSelectChange}>
      {options}
    </select>
  );
};

export default Categories;
