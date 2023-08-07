import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import PurchaseReturn from './PurchaseReturn';

function PurchaseReturnRouter() {
  return (
    <Routes>
      <Route path="/" element={<PurchaseReturn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PurchaseReturnRouter;
