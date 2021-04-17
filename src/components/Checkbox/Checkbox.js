import styles from './Checkbox.module.scss'
import { useState } from 'react'
// import cn from 'classnames'

const Checkbox = ({ id, label, isChecked }) => {
  const [isActive, setActive] = useState(isChecked)

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="checkbox"
        id={id}
        checked={isActive}
        onChange={() => setActive(value => !value)}
      />
      <span className={styles.box} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
