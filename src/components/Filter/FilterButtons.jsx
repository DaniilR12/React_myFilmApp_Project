import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCategoriesFilms } from "../../Redux/slices/moviesSlice";

export default function FilterButtons() {
  const dispatch = useDispatch()
  const { filmsCategory } = useSelector((store) => store.movies);

  const [active, setActive] = useState("All");


  function categoryButtonLogic(value){
    setActive(value)
    dispatch(searchCategoriesFilms(value))
    
  }

  return (
    <>
      <div className="filter__buttons">
      <button key='All' onClick={() => categoryButtonLogic('All')} style={active === 'All' ? { backgroundColor: "red" } : {}}>All</button>

        {filmsCategory.map((value, index) => (
            <button
              onClick={() => categoryButtonLogic(value)}
              style={active === value || active === 'all' ? { backgroundColor: "red" } : {}}
              key={index}
            >
              {value}
            </button>
        ))}
      </div>
    </>
  );
}
