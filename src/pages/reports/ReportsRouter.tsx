import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import ReportsIndex from './ReportsIndex';

function ReportsRouter() {
  return (
    <Routes>
      <Route path="/" element={<ReportsIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ReportsRouter;
