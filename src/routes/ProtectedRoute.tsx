import React, { useEffect } from "react";
import { Route, Navigate, useNavigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

type ProtectedRouteProps = {
  children?: React.ReactNode; // Thêm thuộc tính children vào type
  element: React.ReactNode;
  path: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  path,
}) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path={path} element={element as JSX.Element} />
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
};

export default ProtectedRoute;
