import styles from './ProductList.module.scss'
import { useProductList } from './useProductList'
import ProductItem from '../ProductItem/ProductItem'

const ProductList = () => {
  const { items } = useProductList()

  return (
    <div className={styles.root}>
      <div className={styles.products}>
        {items.map(({ id, ...rest }) => (
          <ProductItem key={id} item={rest} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
