import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import MainLayout from './layout/MainLayout'
import Home from './pages/homePage/Home'
import TimeLine from "./pages/timeLine/TimeLine";
import Stats from "./pages/stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/timeline",
        element: <TimeLine/>,
      },
      {
        path: "/stats",
        element: <Stats/>,
      },
      
    ],
    errorElement: <h2>404 Not Found</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
