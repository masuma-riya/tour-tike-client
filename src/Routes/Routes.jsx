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
import SpotDetails from "../Pages/SpotDetails/SpotDetails";
import UpdatMyList from "../Pages/UpdatMyList/UpdatMyList";
import Redirect from "../Pages/Redirect/Redirect";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://spots-server.vercel.app/allSpot')
        },
        {
            path: '/all-tourists-spot',
            element: <AllSpots></AllSpots>,
        },
        {
            path: '/spot-details/:id',
            element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://spots-server.vercel.app/allSpot/${params.id}`)
        },
        {
            path: '/add-tourists-spot',
            element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
        },
        {
            path: '/myList',
            element: <PrivateRoute><MyList></MyList></PrivateRoute>
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
        },
        {
            path: '/countries/:country',
            element: <Redirect></Redirect>,
        },
        {
            path: '/updateSpot/:id',
            element: <UpdatMyList></UpdatMyList>,
    loader: ({params}) => fetch(`https://spots-server.vercel.app/allSpot/${params.id}`)
        }
      ]
    },
  ]);

  export default router;