import Checkbox from '../Checkbox/Checkbox'
import styles from './Filters.module.scss'
import { ReactComponent as HeaderIcon } from './header-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import FilterButton from '../FilterButton/FilterButton'
import { changeFiltersTypes, getFiltersTypes, getProducts } from '../../store/actions'
import { xor } from 'lodash'
import { DEFAULT_TYPE_ID } from '../../helpers'

const getActiveTypes = (currentActiveTypes, changedType) => {
  let newArray = [DEFAULT_TYPE_ID]

  if (changedType === DEFAULT_TYPE_ID) {
    return newArray
  }

  newArray = xor(currentActiveTypes, [changedType])
  const idx = newArray.indexOf(DEFAULT_TYPE_ID)

  if (idx !== -1 && newArray.length > 1) {
    newArray = [...newArray.slice(0, idx), ...newArray.slice(idx + 1)]
  }

  if (newArray.length === 0) {
    newArray = [DEFAULT_TYPE_ID]
  }

  return newArray
}

const isOnlyAllTypeExist = types => {
  return types.length === 1 && types.includes(DEFAULT_TYPE_ID)
}

const Filters = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector(state => state.filters.checkboxes)
  const items = useSelector(state => state.filters.types.items)
  const activeFilterButtons = useSelector(state => state.filters.types.activeTypes)

  const filtersButtonClickHandler = changedType => {
    if (changedType === DEFAULT_TYPE_ID && isOnlyAllTypeExist(activeFilterButtons)) {
      return
    }

    dispatch(changeFiltersTypes(getActiveTypes(activeFilterButtons, changedType)))
    dispatch(getProducts())
  }

  useEffect(() => {
    dispatch(getFiltersTypes())
  }, [dispatch])

  return (
    <section className={styles.root}>
      <div className={styles.headerWrapper}>
        <span className={styles.headerIcon}>
          <HeaderIcon />
        </span>
        <h3 className={styles.header}>Filters</h3>
      </div>

      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Category</legend>
          <div className={styles.buttonRow}>
            {items
              ? items.map(({ id, name, type }) => (
                  <FilterButton
                    key={id}
                    type={type}
                    name={name}
                    isActive={activeFilterButtons.includes(type)}
                    onClick={filtersButtonClickHandler}
                  />
                ))
              : null}
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Status</legend>
          <div className={styles.checkboxes}>
            {checkboxes
              ? checkboxes.map(({ id, label, value }) => <Checkbox id={id} label={label} isChecked={value} key={id} />)
              : null}
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Filters
