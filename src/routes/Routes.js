import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../components/AddAProduct";
import AddCategory from "../components/AddCategory";
import ProductByCategory from "../components/ProductByCategory";
import ProfileUpdate from "../components/ProfileUpdate";
import Main from "../layout/Main";
import ForgetPassword from "../pages/forgetPassword/ForgetPassword";
import AllProducts from "../pages/home/AllProducts";
import Category from "../pages/home/Category";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },

      {
        path: "/addCategory",
        element: <AddCategory />,
      },
      {
        path: "/productsByCategory/:id",
        loader: ({ params }) =>
          fetch(
            `https://backend-ecru-tau.vercel.app/productsByCategory/${params.id}`
          ),
        element: <ProductByCategory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/addProducts",
        element: <AddAProduct />,
      },
      {
        path: "/updateProfile",
        element: <ProfileUpdate />,
      },
    ],
  },
]);
