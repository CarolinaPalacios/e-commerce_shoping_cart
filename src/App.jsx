import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import { products } from './mocks/products';
import { useFilters } from './hooks/useFilters';
import { IS_DEVELOPMENT } from './config';

const App = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
};

export default App;
