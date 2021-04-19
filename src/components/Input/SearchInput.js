import { ReactComponent as SearchIcon } from './search-icon.svg'
import styles from './SearchInput.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFiltersSearchInput, getProducts } from '../../store/actions'
import { debounce } from 'lodash'
import { useMemo } from 'react'

const SearchInput = () => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.filters.searchQuery)
  const debouncedDispatchGetProducts = useMemo(() => debounce(() => dispatch(getProducts()), 500), [dispatch])

  const handleChange = e => {
    dispatch(changeFiltersSearchInput(e.target.value))
    debouncedDispatchGetProducts()
  }

  return (
    <form className={styles.root}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="Search among products"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchInput
