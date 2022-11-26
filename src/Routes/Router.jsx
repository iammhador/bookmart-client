import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import AllUser from "../Pages/Dashboard/AllUser";
import PostProduct from "../Pages/Dashboard/PostProduct";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/products";
import MatchCategory from "../Pages/Home/MatchCategory";
import AddProducts from "../Pages/Dashboard/AddProducts";
import MyOrder from "../Pages/Dashboard/MyOrder";

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
      // {
      //   path: "/add-product",
      //   element: <AddProduct />,
      // },
      // {
      //   path: "/add-products",
      //   element: <AddProducts />,
      // },
      {
        path: "/products/:categoryName",
        element: <MatchCategory />,
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
      { path: "/dashboard/my-order", element: <MyOrder /> },
      { path: "/dashboard/add-product", element: <PostProduct /> },
      { path: "/dashboard/users", element: <AllUser /> },
    ],
  },
]);

export default router;
