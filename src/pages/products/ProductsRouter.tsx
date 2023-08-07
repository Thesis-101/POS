import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import ProductsIndex from './ProductsIndex';

function ProductsRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ProductsRouter;
