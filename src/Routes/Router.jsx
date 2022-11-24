import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Error/Dashboard";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
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
]);

export default router;
