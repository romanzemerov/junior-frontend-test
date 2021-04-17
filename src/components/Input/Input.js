import { ReactComponent as SearchIcon } from './search-icon.svg'
import styles from './Input.module.scss'

const Input = () => {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input className={styles.input} type="text" placeholder="Search among products" />
    </div>
  )
}

export default Input
