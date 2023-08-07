import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import ReduxCounterIndex from "./ReduxCounterIndex";

function ReduxCounterRouter () {
  return (
    <Routes>
      <Route path="/" element={<ReduxCounterIndex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ReduxCounterRouter;
