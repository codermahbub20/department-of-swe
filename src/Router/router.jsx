import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    
  ]);
  