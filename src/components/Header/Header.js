import styles from './Header.module.scss'
import SearchInput from '../Input/SearchInput'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className="site-wrapper">
        <div className={styles.inner}>
          <h1 className={styles.header}>Products</h1>
          <SearchInput />
        </div>
      </div>
    </header>
  )
}

export default Header
