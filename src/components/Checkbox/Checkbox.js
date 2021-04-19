import styles from './Checkbox.module.scss'
import { filtersToggleCheckbox, getProducts } from '../../store/actions'
import { useDispatch } from 'react-redux'

const Checkbox = ({ id, label, isChecked }) => {
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(filtersToggleCheckbox(id))
    dispatch(getProducts())
  }

  return (
    <div className={styles.root}>
      <input className={styles.input} type="checkbox" id={id} checked={isChecked} onChange={handleChange} />
      <span className={styles.box} onClick={handleChange} />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
