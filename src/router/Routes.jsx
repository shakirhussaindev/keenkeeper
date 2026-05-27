import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import TimeLine from "../pages/timeLine/TimeLine";
import Stats from "../pages/stats/Stats";

import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: '/friend/:id',
        element: <FriendDetails/>
      }
    ],
    
  },
]);
