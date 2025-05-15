import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCategoriesFilms } from "../../Redux/slices/moviesSlice";
import type { RootState, AppDispatch } from "../../Redux/store";

export default function FilterButtons() {
  const dispatch: AppDispatch = useDispatch();

  const { filmsCategory } = useSelector((store: RootState) => store.movies);

  const [active, setActive] = useState<string>("All");

  function categoryButtonLogic(value: string): void {
    setActive(value);
    dispatch(searchCategoriesFilms(value));
  }

  return (
    <div className="filter__buttons">
      <button
        key="All"
        onClick={() => categoryButtonLogic("All")}
        style={active === "All" ? { backgroundColor: "red" } : {}}
      >
        All
      </button>

      {filmsCategory.map((value: string, index: number) => (
        <button
          key={index}
          onClick={() => categoryButtonLogic(value)}
          style={active === value ? { backgroundColor: "red" } : {}}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
