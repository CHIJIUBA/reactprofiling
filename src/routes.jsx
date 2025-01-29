import App from "./App";
import Profile from "./profile";
import ErrorPage from "./404";
import Home from "./home";
import Show from "./body";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";
import ProtectedRoute from "./ProtectedRoute";


// Function to get the access token from cookies
const isAuthenticated = () => {
    let access = localStorage.getItem("token");

    if(access == " ") {
        return false;
    }

    return true;
}

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
        ]
      },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "/",
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
