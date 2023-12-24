import React, { Suspense, lazy } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Account from "./components/Account";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Order from "./components/Order";
import RestaurantMenu from "./components/Restaurant";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import PaymentDone from "./components/PaymentDone";
const Instamart = lazy(() => import("./components/Instamart"));

const Layout = () => {
  return (
    <Provider store={store}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "paymentSucess",
        element: <PaymentDone />,
      },
    ],
  },
]);
const root_html = document.getElementById("root");
const root = ReactDOM.createRoot(root_html);
root.render(<RouterProvider router={appRouter} />);
// root.render(<Layout />);
