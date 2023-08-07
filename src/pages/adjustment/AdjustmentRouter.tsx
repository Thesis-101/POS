import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import AdjustmentIndex from './AdjustmentIndex';

function AdjustmentRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdjustmentIndex   />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdjustmentRouter;
