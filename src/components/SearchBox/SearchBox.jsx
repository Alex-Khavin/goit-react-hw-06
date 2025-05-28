import {useId} from 'react'
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice'

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }
  return (
<div className={css.container}>
      <label id={inputId}>Find contacts by name</label>
      <input className={css.searchInput} type="text" value={filter} onChange={handleChange} name="search" id={inputId} />
</div>
)
}
