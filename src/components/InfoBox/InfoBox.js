import styles from './InfoBox.module.scss'

const InfoBox = ({ text }) => {
  return (
    <div>
      <section className={styles.box}>
        <span className={styles.text}>{text}</span>
      </section>
    </div>
  )
}

export default InfoBox
