import { useRoutes } from "@solidjs/router";
import Login from "../pages/login";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Allproducts from "../pages/Allproducts";
import ProductsDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import productsByCategory from "../pages/ProductByCategory";

const routes = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/category",
      component: Category,
    },
    {
      path: "/allProducts",
      component: Allproducts,
    },
    {
      path: "/ProductsDetails/:id",
      component: ProductsDetails,
    },
    {
      path: "/Cart",
      component: Cart,
    },
    {
      path: "/productsByCategory/:category",
      component: productsByCategory,
    },
  ];
  const Routes = useRoutes(routes);

  return (
    <>
      <Routes>
        <Routes />
      </Routes>
    </>
  );
};
export default routes;
