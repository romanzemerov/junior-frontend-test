import { ReactComponent as LoaderImage } from './loader.svg'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderImage className={styles.loader} />
    </div>
  )
}

export default Loader
