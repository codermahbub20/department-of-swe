import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Faculty from "../Pages/Faculty/Faculty";
import PlayGround from "../Pages/PlayGround/PlayGround";
import MessageFromHead from "../Components/MessageFromHead/MessageFromHead";
import Admission from "../Components/Admission/Admission";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/faculty",
          element: <Faculty />,
        },
        {
          path: "/playground",
          element: <PlayGround />,
        },
        {
          path: "/admission",
          element: <Admission />,
        },
        {
          path: "/head",
          element: <MessageFromHead />,
        },
      ],
    },
    
  ]);
  