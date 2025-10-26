import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesItem from "../pages/CategoriesItem";
import toyDetails from "../pages/toyDetails";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

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
        Component: toyDetails,
        loader: () => fetch("/items.json"),
    },
    {
        path: "/*",
        element: <h1>Error page</h1>
    }


])

export default router;

