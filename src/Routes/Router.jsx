import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import AllUser from "../Pages/Dashboard/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PostProduct from "../Pages/Dashboard/PostProduct";

import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login";
import Register from "../Shared/Register";

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
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.categoryName}`),
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
      { path: "/dashboard", element: <PostProduct /> },
      { path: "/dashboard/users", element: <AllUser /> },
    ],
  },
]);

export default router;
