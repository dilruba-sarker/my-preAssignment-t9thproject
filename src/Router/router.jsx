import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componenets/Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contract from "../pages/Contract";
import PrivateRoute from './../../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
          loader:()=> fetch("/data.json")
        },
        {
          path: "/login",
          element: <Login />,
        
        },
        // {
        //   path: "/booking/:id",
        //   element: <Login />,
        
        // },
        {
          path: "/register",
          element: <Register />,
        
        },
        {
          path: "/contract",
          element:<PrivateRoute>  <Contract /></PrivateRoute>,
        
        },
      ],
  
    },
  ]);
  export default router