import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import Quotations from "./Quotations";

function QuotationsRouter() {
  return (
    <Routes>
      <Route path="/" element={<Quotations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default QuotationsRouter;
