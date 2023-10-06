import {
 
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
< AuthProvider> <RouterProvider router={router} /></AuthProvider>
    
   
  </React.StrictMode>
);