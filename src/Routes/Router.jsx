import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import AllUser from "../Pages/Dashboard/AllUser";
// import PostProduct from "../Pages/Dashboard/PostProduct";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/products";
import MatchCategory from "../Pages/Home/MatchCategory";
// import AddProducts from "../Pages/Dashboard/AddProducts";
import MyOrder from "../Pages/Dashboard/MyOrder";
import MyProducts from "../Pages/Dashboard/MyProducts";
import MyBuyers from "../Pages/Dashboard/MyBuyers";
import BasicDashboard from "../Pages/Dashboard/BasicDashboard";
import AllSellers from "../Pages/Dashboard/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:categoryName",
        element: (
          <PrivateRoute>
            <MatchCategory />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `http://localhost:5000/products?categoryName=${params.categoryName}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      { path: "/dashboard", element: <BasicDashboard /> },
      { path: "/dashboard/my-order", element: <MyOrder /> },
      { path: "/dashboard/add-product", element: <AddProduct /> },
      { path: "/dashboard/my-products", element: <MyProducts /> },
      { path: "/dashboard/my-buyers", element: <MyBuyers /> },
      { path: "/dashboard/sellers", element: <AllSellers /> },
      { path: "/dashboard/buyers", element: <AllBuyers /> },
    ],
  },
]);

export default router;
