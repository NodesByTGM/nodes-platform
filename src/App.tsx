import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./context/auth";
import {
  AuthLayout,
  MainLayout,
} from "./layout";
import './App.css';
import 'swiper/css';
import {
  authRoutes,
  publicRoutes,
  upgradeRoutes
} from './utilities/routes';
import AppConfig from "./utilities/config";
import { Register } from "./pages";

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
