import { Routes, Route } from 'react-router-dom';
import NotFound from '../errors/NotFound';
import TransferIndex from './TransferIndex';

function TransferRouter () {
  return (
    <Routes>
      <Route path="/" element={<TransferIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default TransferRouter;
