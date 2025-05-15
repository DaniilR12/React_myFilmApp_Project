import FilterButtons from "./FilterButtons";
import FilterCategories from "./FilterCategories";
import FilterSearch from "./FilterSearch";

export default function Filter() {
  return (
    <>
      <div className="filter">
        <FilterCategories/>
        <FilterButtons/>
        <FilterSearch/>
      </div>
    </>
  );
}
