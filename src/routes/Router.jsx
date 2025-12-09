import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesItem from "../pages/CategoriesItem";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import Loading from "../Loading";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import ToyDetails from "../pages/ToyDetails";
import UpdateService from "../pages/Updateservice";


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
                hydrateFallbackElement: <Loading></Loading>

            },

            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>,
            }

        ]

    },
    {
        path: "/add-services",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
    },
    {
        path: "/my-services",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
    },
    {
        path: "/update-services/:id",
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>
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
        hydrateFallbackElement: <Loading></Loading>
    },

    {
        path: "/*",
        element: <h1>Error page</h1>
    }

])

export default router;

