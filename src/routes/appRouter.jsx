import Login from "../pages/Login";
import Desbhoard from "../pages/Desbhoard";
import Services from "../pages/Services";
import App from "../App"
export let router = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/services",
        element: <Services />
    },
    {
        path: "/desbhoard",
        element: <Desbhoard />
    },
    {
        path: "/",
        element: <App />
    }
]