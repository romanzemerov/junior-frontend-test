import styles from './ProductList.module.scss'
import ProductItem from '../ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../store/actions'

const ProductList = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.products.items)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className={styles.root}>
      <div className={styles.products}>
        {items && items.map(({ id, ...rest }) => <ProductItem key={id} item={rest} />)}
      </div>
    </div>
  )
}

export default ProductList
