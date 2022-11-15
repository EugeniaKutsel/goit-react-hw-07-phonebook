import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from "../Filter/Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => dispatch(setFilter(e.currentTarget.value))
  
  return (
    <div className={css.filter}>
    <label className={css.filterName}>Find contacts by name:</label>
      <input className={css.filterInput} type="text" onChange={changeFilter} />
    </div>
  )
}

export default Filter;