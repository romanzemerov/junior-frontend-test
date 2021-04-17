import Checkbox from '../Checkbox/Checkbox'
import styles from './Filters.module.scss'
import { ReactComponent as HeaderIcon } from './header-icon.svg'
import cn from 'classnames'

const CHECKBOXES = [
  {
    id: 'limited',
    label: 'Limited',
  },
  { id: 'new', label: 'New' },
]

const Filters = () => {
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
            <button className={styles.button} type="button">
              All
            </button>

            <button className={cn(styles.button, styles.button_active)} type="button">
              All
            </button>
            <button className={cn(styles.button)} disabled type="button">
              All
            </button>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Status</legend>
          <div className={styles.checkboxes}>
            {CHECKBOXES.map(({ id, label }) => (
              <Checkbox id={id} label={label} isChecked={false} key={id} />
            ))}
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Filters
