import ProductList from './components/ProductList/ProductList'
import Filters from './components/Filters/Filters'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <div className="site-wrapper">
        <Filters />
        <ProductList />
      </div>
    </>
  )
}

export default App
