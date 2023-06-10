import { lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import DefaultLayout from "../layout/DefaultLayout";
import { getCookie } from "../utils/cookieHandler";

const Index = lazy(() => import("../pages/Index"));
const Login = lazy(() => import("../pages/Login"));




const AppRoutes = () => {
  const { isLogin }: any = useAuthContext();


  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={isLogin ? <Index /> : <Navigate to='/login' />} />
        <Route path="/login" element={!isLogin ? <Login /> : <Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;