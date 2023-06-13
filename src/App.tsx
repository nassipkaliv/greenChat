import React from "react";
import AppRoutes from "./routes/AppRoutes";
import useAppLoad from "./pages/chat/hooks/useAppLoad";
const SplashPage = React.lazy(() => import("./pages/splash/SplashPage"));

export default function App() {
  // const { isLoaded, progress } = useAppLoad();

  // if (!isLoaded) return <SplashPage progress={progress} />;
  return <AppRoutes />;
}