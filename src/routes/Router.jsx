import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesItem from "../pages/CategoriesItem";
import toyDetails from "../pages/toyDetails";

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
        path: '/toy-details/:id',
        Component: toyDetails,
        loader: () => fetch("/items.json"),
    }


])

export default router;

