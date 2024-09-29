import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
    },
  ]);
  