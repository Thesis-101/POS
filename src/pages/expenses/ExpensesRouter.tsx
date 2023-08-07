import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import Expenses from "./Expenses";

function ExpensesRouter() {
  return (
    <Routes>
      <Route path="/" element={<Expenses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ExpensesRouter;
