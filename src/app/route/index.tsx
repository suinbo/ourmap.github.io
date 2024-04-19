import Pages from "@/pages"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const Router = () => {
    const objectRouter = createBrowserRouter([
        {
            path: "/",
            element: <Pages.Home />,
        },
    ])
    return <RouterProvider router={objectRouter}></RouterProvider>
}

export default Router
