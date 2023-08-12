import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import New from "../pages/New";
import Edit from "../pages/Edit";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
