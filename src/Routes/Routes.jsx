import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllSpots from "../Pages/AllSpots/AllSpots";
import AddSpots from "../Pages/AddSpots/AddSpots";
import MyList from "../Pages/MyList/MyList";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import UpdatedUser from "../Pages/UpdatedUser/UpdatedUser";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all-tourists-spot',
            element: <AllSpots></AllSpots>
        },
        {
            path: '/add-tourists-spot',
            element: <AddSpots></AddSpots>
        },
        {
            path: '/my-list',
            element: <MyList></MyList>
        },
        {
            path: '/sign-up',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/update-user',
            element: <PrivateRoute><UpdatedUser></UpdatedUser></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;