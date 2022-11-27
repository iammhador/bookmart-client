import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Asset/logo.png";
import { AuthContext } from "../Context/ContextApi";
const Navbar = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav ref={navRef} className="w-full top-0 z-20 py-2 bg-gray-100">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 z-10 bg-gray-100">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block ">
          <div className="lg:hidden">
            <>
              <label
                htmlFor="bookmart-drawer"
                className="text-primary outline-none p-2 rounded-md focus:border-primary focus:border hover:text-secondary"
              >
                {state ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </label>
            </>
          </div>
          <NavLink to="/" className="flex justify-center items-center">
            <img className="w-8 h-8 mr-2" src={logo} alt="Bookmart logo" />
            <p className="text-3xl font-bold text-primary">Bookmart</p>
          </NavLink>
          <div className="lg:hidden">
            <button
              className="text-primary outline-none p-2 rounded-md focus:border-primary focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              {user?.email ? (
                <li
                  onClick={handleLogout}
                  className="mt-8 mb-8 lg:mt-0 lg:mb-0"
                >
                  <NavLink
                    to="/"
                    className="font-semibold text-lg py-3 px-4 text-center text-primary  rounded-md shadow block lg:inline hover:text-neutral hover:bg-primary"
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="mt-4 lg:mt-0">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-lg py-3 px-4 text-center text-neutral rounded-md shadow block lg:inline bg-primary"
                        : "font-semibold text-lg py-3 px-4 text-center text-primary  rounded-md shadow block lg:inline hover:text-neutral hover:bg-primary"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}

              {/* <li className="mt-8 lg:mt-0">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-lg py-3 px-4 text-center text-neutral rounded-md shadow block lg:inline bg-primary"
                      : "font-semibold text-lg py-3 px-4 text-center text-primary  rounded-md shadow block lg:inline hover:text-neutral hover:bg-primary"
                  }
                >
                  Register
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-600 hover:text-indigo-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "font-semibold text-lg py-3 px-4 text-center text-neutral rounded-md shadow block lg:inline bg-primary"
                          : "font-semibold text-lg py-3 px-4 text-center text-primary  rounded-md shadow block lg:inline hover:text-neutral hover:bg-primary"
                      }
                      to={item.path}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
