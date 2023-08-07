import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import SalesIndex from './SalesIndex';

function SalesRouter() {
  return (
    <Routes>
      <Route path="/" element={<SalesIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default SalesRouter;
