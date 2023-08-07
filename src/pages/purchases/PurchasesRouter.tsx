import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import Purchases from "./Purchases";

function PurchasesRouter() {
  return (
    <Routes>
      <Route path="/" element={<Purchases />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PurchasesRouter;
