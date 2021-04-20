import styles from './InfoBox.module.scss'

const InfoBox = ({ text }) => {
  return (
    <div className={styles.root}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default InfoBox
