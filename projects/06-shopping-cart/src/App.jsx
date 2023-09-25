import { Products } from './components/Products.jsx'
import { products } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
