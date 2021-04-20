import styles from './FilterButton.module.scss'
import cn from 'classnames'

const FilterButton = ({ id, name, isActive, onClick }) => {
  const clickHandler = () => {
    onClick(id)
  }

  return (
    <button className={cn(styles.root, { [styles.root_active]: isActive })} type="button" onClick={clickHandler}>
      {name}
    </button>
  )
}

export default FilterButton
