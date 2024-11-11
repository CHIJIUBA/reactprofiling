import App from "./App";
import Profile from "./profile";
import ErrorPage from "./404";
import Home from "./home";
import Show from "./body";
import Login from "./login";
import Register from "./register";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "home",
        element: <Home />,
    },
    {
        path: "show",
        element: <Show/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "register",
        element: <Register/>,
    },
];

export default routes;
