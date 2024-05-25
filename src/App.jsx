import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Layout from "./layouts/Layout";
import PrivateRoute from "./utils/router/PrivateRoute";
import AuthRootComponent from "./pages/auth/AuthRootComponent";
import CartContextComp from "./context/CartContextComp";

const App = () => {
  return (
    <CartContextComp>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </CartContextComp>
  );
};

export default App;
