import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { products } from './mocks/products';
import { useFilters } from './hooks/useFilters';
import { IS_DEVELOPMENT } from './config';
import { CartProvider } from './context/cart';

const App = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
};

export default App;
