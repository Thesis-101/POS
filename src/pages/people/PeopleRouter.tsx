import { Routes, Route } from "react-router-dom";
import NotFound from "../errors/NotFound";
import People from "./People";

function PeopleRouter() {
  return (
    <Routes>
      <Route path="/" element={<People />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PeopleRouter;
