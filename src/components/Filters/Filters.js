import Checkbox from '../Checkbox/Checkbox'
import styles from './Filters.module.scss'
import { ReactComponent as HeaderIcon } from './header-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import FilterButton from '../FilterButton/FilterButton'

import { changeFiltersTypes, getFiltersTypes, getProducts } from '../../store/actions'
import { xor } from 'lodash'

const Filters = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector(state => state.filters.checkboxes)
  const items = useSelector(state => state.filters.types.items)
  const activeFilterButtons = useSelector(state => state.filters.types.activeTypes)

  const filtersButtonClickHandler = changedType => {
    let newArray

    if (changedType === 'all') {
      newArray = ['all']
    } else {
      newArray = xor(activeFilterButtons, [changedType])
      const idx = newArray.indexOf('all')

      if (idx !== -1 && newArray.length > 1) {
        newArray = [...newArray.slice(0, idx), ...newArray.slice(idx + 1)]
      }
    }

    dispatch(changeFiltersTypes(newArray))
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
