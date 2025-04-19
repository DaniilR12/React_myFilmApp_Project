import { useState } from "react";


export default function FilterCategories() {
  const [active, setActive] = useState("Popular");

  let filter_categoryes = ["Popular", "Novelty", "Featured", "Short films"];

  return (
    <>
      <div id="categoryes" className="filter__categoryes anchor">
        <div className="filter__categoryes-flex">
          {filter_categoryes.map((category, index) => (
            <div
              onClick={() => setActive(category)}
              className={`filter__categoryes-item ${
                category === active ? "active-category" : ""
              }`}
              key={index}
            >
              <p>{category}</p>
              <span></span>
            </div>
          ))}
        </div>
        <span></span>
      </div>
    </>
  );
}
