import styles from './ProductList.module.scss'
import ProductItem from '../ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../store/actions'
import Loader from '../Loader/Loader'
import InfoBox from '../InfoBox/InfoBox'
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
      {items.length === 0 && loadingState === LOADING_STATES.SUCCEEDED ? (
        <InfoBox text={"We didn't find anything :("} />
      ) : null}
      {loadingState === LOADING_STATES.FAILED ? <InfoBox text={'Error. Try again, please.'} /> : null}
      {items ? (
        <div className={styles.products}>
          {items.map(({ id, ...rest }) => (
            <ProductItem key={id} item={rest} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ProductList
