import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters);
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={selectNameFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        type="text"
      />
    </div>
  );
}
