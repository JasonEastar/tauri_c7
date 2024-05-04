import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { mainRoutes } from "./routes";
import MainLayout from "../layout/MainLayout";

const Routers = () => {
  
  return (
    <Routes>
      {mainRoutes.map((route) => {
        const Page =route.component;
        const Layout = route.layout || MainLayout;
        return route.isAuth ? (
          <Route
            key={route.path} // Sử dụng route.path làm key
            path={route.path}
            element={
              <ProtectedRoute
                element={
                  <Layout type={route.type}>
                    <Page />
                  </Layout>
                }
                path={""}
              ></ProtectedRoute>
            }
          />
        ) : (
          <Route
            key={route.path} // Sử dụng route.path làm key
            path={route.path}
            element={
              <Layout type={route.type}>
                <Page />
              </Layout>
            }
          />
        );
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default Routers;
