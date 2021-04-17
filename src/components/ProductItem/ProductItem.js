import styles from './ProductItem.module.scss'
import cn from 'classnames'

const BADGES = {
  isNew: { title: 'New', stylePostfix: 'new' },
  isLimited: { title: 'Limited', stylePostfix: 'limited' },
}

const ProductItem = ({ item }) => {
  const { name, description, categoryType, categoryName, price, discount } = item

  const getBadges = item => {
    const badgesToRender = Object.keys(BADGES).filter(badge => item[badge])

    if (badgesToRender.length === 0) {
      return null
    }

    return (
      <div className={styles.badges}>
        {badgesToRender.map((badge, index) => {
          const additionalClass = `badge_${BADGES[badge].stylePostfix}`

          return (
            <span key={index} className={cn(styles.badge, [`${styles[additionalClass]}`])}>
              {BADGES[badge].title}
            </span>
          )
        })}
      </div>
    )
  }

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return (
    <article className={styles.root}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={require(`./images/${categoryType}.png`).default}
          srcSet={require(`./images/${categoryType}@2x.png`).default + ' 2x'}
          alt={categoryName}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.typeRow}>
          <div className={styles.type}>{categoryName}</div>
          {getBadges(item)}
        </div>

        <h2 className={styles.name}>{name}</h2>
        <span className={styles.description}>{description}</span>
        <div className={styles.priceRow}>
          <span className={styles.price}> {formatter.format(price)}</span>
          <span className={styles.discount}>{discount && `Discount ${formatter.format(discount)} per bag`}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductItem
