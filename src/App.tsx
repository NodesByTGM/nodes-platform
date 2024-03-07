import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import './App.css';
import './tailwind.css';
import AuthProvider from "./context/auth";
import {
  AuthLayout,
  MainLayout,
} from "./layout";
import { Register } from "./pages";
import AppConfig, { BASE_API_ENDPOINT } from "./utilities/config";
import {
  authRoutes,
  publicRoutes,
  upgradeRoutes
} from './utilities/routes';

const router = createBrowserRouter([
  {
    // parent route component
    element: <MainLayout />,

    // child route components
    children: [
      ...publicRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,

      }))
    ],
  },
  {
    // parent route component
    element: <AuthLayout />,
    // child route components
    children: [
      ...authRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,

      }))
    ],
  },
  ...upgradeRoutes.map(route => ({
    path: route.path,
    Component: route.Component,
  })),
  {
    path: AppConfig.PATHS.Auth.Register,
    Component: Register
  },
]);

function App() {
  useEffect(() => {
    fetch(BASE_API_ENDPOINT)
      .then(() => {
        // handle the response
      })
      .catch(() => {
        // handle the error
      });
  }, [])
  return (
    <div className="">
      <ToastContainer />
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
