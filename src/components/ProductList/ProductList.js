import styles from './ProductList.module.scss'
import ProductItem from '../ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../store/actions'
import Loader from '../../Loader/Loader'
import { LOADING_STATES } from '../../helpers'

const ProductList = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.products.items)
  const loadingState = useSelector(state => state.products.status)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className={styles.root}>
      {loadingState === LOADING_STATES.LOADING ? <Loader /> : null}
      <div className={styles.products}>
        {items && items.map(({ id, ...rest }) => <ProductItem key={id} item={rest} />)}
      </div>
    </div>
  )
}

export default ProductList
