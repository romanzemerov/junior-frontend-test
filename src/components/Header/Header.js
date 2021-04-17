import styles from './Header.module.scss'
import Input from '../Input/Input'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className="site-wrapper">
        <div className={styles.inner}>
          <h1 className={styles.header}>Products</h1>
          <Input />
        </div>
      </div>
    </header>
  )
}

export default Header
