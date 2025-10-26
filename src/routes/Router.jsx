import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesItem from "../pages/CategoriesItem";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../provider/PrivateRoute";
import ToyDetails from "../pages/toyDetails";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/category/:id",
                Component: CategoriesItem,
                loader: () => fetch("/items.json"),

            },
            {
                path: "/about-us",
                Component: AboutUsPage,
            },
            {
                path: "/contact-us",
                Component: ContactUs,
            }

        ]

    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: LoginPage,
            },
            {
                path: "/auth/register",
                Component: RegisterPage,
            },

        ]
    },
    {
        path: '/toy-details/:id',
        element: <PrivateRoute>
            <ToyDetails></ToyDetails>
        </PrivateRoute>,
        loader: () => fetch("/items.json"),
    },
    {
        path: "/*",
        element: <h1>Error page</h1>
    }


])

export default router;

