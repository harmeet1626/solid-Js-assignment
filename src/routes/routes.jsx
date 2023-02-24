import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import Login from "../pages/login";
import Home from "../pages/Home";
import { isLogin, setisLogin } from "../pages/login";
import Category from "../pages/Category";
import Allproducts from "../pages/Allproducts";
import ProductsDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import productsByCategory from "../pages/ProductByCategory";
const routes = () => {
  const navigate = useNavigate();
  function requireAuth(component) {
    if (!isLogin()) {
      navigate("/login");
      return null;
    }
    return component;
  }
  return (
    <>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/" component={requireAuth(Home)} />
        <Route path="/category" component={requireAuth(Category)} />
        <Route path="/allProducts" component={requireAuth(Allproducts)} />
        <Route
          path="/ProductsDetails/:id"
          component={requireAuth(ProductsDetails)}
        />
        <Route path="/Cart" component={requireAuth(Cart)} />
        <Route
          path="/productsByCategory/:category"
          component={requireAuth(productsByCategory)}
        />
      </Routes>
    </>
  );
};
export default routes;
