import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { hasAdminAccess, hasUserAccess } from "../utils/authorization";

import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import OrderHistory from "../pages/OrderHistory";

const ProtectedRoute = ({ element: Element, permissions }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!permissions(user)) {
    alert("Você não tem permisao para acessar essa página!");
    navigate("/");
    return null;
  }

  return <Element />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route
        path="/new"
        element={<ProtectedRoute permissions={hasAdminAccess} element={New} />}
      />
      <Route
        path="/edit/:id"
        element={<ProtectedRoute permissions={hasAdminAccess} element={Edit} />}
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute permissions={hasUserAccess} element={Favorites} />
        }
      />
    </Routes>
  );
}
