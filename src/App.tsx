import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "./App.css";
import "./tailwind.css";
import "./index.scss";

import AuthProvider from "./context/auth";
import {
  AuthLayout,
  MainLayout,
  AdminAuthLayout,
  AdminMainLayout,
  LandingPageLayout,
} from "./layout";
import { Register } from "./pages";
import AppConfig from "./utilities/config"; // { BASE_API_ENDPOINT }
import {
  authRoutes,
  publicRoutes,
  upgradeRoutes,
  adminAuthRoutes,
  adminMainRoutes,
  landingPageRoutes,
} from "./utilities/routes";
import AppWrapper from "./AppWrapper";
const router = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    // child route components
    children: [
      ...landingPageRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
    ],
  },
  {
    element: <AdminAuthLayout />,
    // child route components
    children: [
      ...adminAuthRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
    ],
  },
  {
    element: <AdminMainLayout />,
    // child route components
    children: [
      ...adminMainRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
    ],
  },
  {
    // parent route component
    element: <MainLayout />,

    // child route components
    children: [
      ...publicRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
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
      })),
    ],
  },
  ...upgradeRoutes.map((route) => ({
    path: route.path,
    Component: route.Component,
  })),
  {
    path: AppConfig.PATHS.Auth.Register,
    Component: Register,
  },
]);

// const ScrollToTop = ({ children }) => {
//   const { route } = useRoute();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [route]);

//   return <div className="">{children}</div>;
// };

function App() {
  useEffect(() => {}, []);
  return (
    <div className="">
      <AppWrapper>
        <HelmetProvider>
          <AuthProvider>
            {/* <ScrollToTop> */}
            <RouterProvider router={router} />
            {/* </ScrollToTop> */}
          </AuthProvider>
        </HelmetProvider>
      </AppWrapper>
    </div>
  );
}

export default App;
