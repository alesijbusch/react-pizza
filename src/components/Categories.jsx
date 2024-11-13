import React, { useState } from "react";

const Categories = () => {
  const [activIndex, setActiveIndex] = useState(0);

  // const handelCategory = (index) => {
  //   setActiveIndex(index);
  // };
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activIndex === i ? "active" : ""}
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
