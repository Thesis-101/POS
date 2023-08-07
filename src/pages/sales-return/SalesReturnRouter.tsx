import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import SalesReturnIndex from './SalesReturnIndex';

function SalesReturnRouter() {
  return (
    <Routes>
      <Route path="/" element={<SalesReturnIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default SalesReturnRouter;
